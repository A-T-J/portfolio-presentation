"use client";

import QRCode from "qrcode";
import { useMemo, useSyncExternalStore } from "react";

const noop = () => () => {};
const MARGIN = 2;

/** The address this page is served from, without the slide hash, so students land on the start. */
function useSiteUrl() {
  return useSyncExternalStore(
    noop,
    () => `${window.location.origin}${window.location.pathname}`,
    () => null,
  );
}

/** QR card for the site, built from the page's own URL. Dark ink on white for reliable scanning. */
export function SiteQrCard({ title, body }: { title: string; body: string }) {
  const url = useSiteUrl();
  const label = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";

  const qr = useMemo(() => {
    if (!url) return null;
    const { modules } = QRCode.create(url, { errorCorrectionLevel: "M" });
    let path = "";
    for (let row = 0; row < modules.size; row++) {
      for (let col = 0; col < modules.size; col++) {
        if (modules.get(row, col)) path += `M${col + MARGIN} ${row + MARGIN}h1v1h-1z`;
      }
    }
    return { size: modules.size + MARGIN * 2, path };
  }, [url]);

  const box = "h-44 w-44 shrink-0 rounded-lg border border-line bg-white lg:h-auto lg:w-full lg:aspect-square";

  return (
    <aside className="card flex flex-col items-center p-5 text-center sm:flex-row sm:text-left lg:flex-col lg:text-center">
      {qr ? (
        <svg
          viewBox={`0 0 ${qr.size} ${qr.size}`}
          role="img"
          aria-label={`QR code: ${label}`}
          shapeRendering="crispEdges"
          className={box}
        >
          <rect width={qr.size} height={qr.size} fill="#ffffff" />
          <path d={qr.path} fill="#171a17" />
        </svg>
      ) : (
        <div className={box} aria-hidden="true" />
      )}
      <div className="mt-4 sm:ml-5 sm:mt-0 lg:ml-0 lg:mt-4">
        <p className="text-base font-semibold leading-snug text-ink">{title}</p>
        {url ? (
          <a href={url} className="mt-1 block break-all font-mono text-xs text-accent underline underline-offset-4">
            {label}
          </a>
        ) : null}
        <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      </div>
    </aside>
  );
}
