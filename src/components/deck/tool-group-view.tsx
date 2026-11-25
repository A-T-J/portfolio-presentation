"use client";

import { ArrowLeft, ArrowUpRight } from "@/components/icons";
import { ui } from "@/content/deck";
import type { Lang, ToolGroup } from "@/content/types";

function hostname(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export function ToolGroupView({ group, lang, onBack }: { group: ToolGroup; lang: Lang; onBack: () => void }) {
  return (
    <div className="wrap py-8 md:py-12">
      <button
        type="button"
        onClick={onBack}
        className="btn btn-outline py-2 text-sm"
      >
        <ArrowLeft />
        {ui.backToTools[lang]}
      </button>

      <header className="mt-6 max-w-3xl">
        <p className="font-mono text-xs font-semibold tracking-[0.14em] text-accent">{group.code}</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-[-0.02em] text-ink md:text-6xl">
          {group.name[lang]}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-ink">{group.tagline[lang]}</p>
        <p className="mt-4 text-base leading-relaxed text-muted">{group.why[lang]}</p>
      </header>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        <section className="card p-5 md:p-6" aria-labelledby="know-this">
          <h2 className="eyebrow" id="know-this">
            {ui.knowThis[lang]}
          </h2>
          <ul className="mt-3 space-y-2">
            {group.facts.map((fact) => (
              <li key={fact.en} className="flex items-start gap-2 text-[15px] leading-relaxed text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {fact[lang]}
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-5 md:p-6" aria-labelledby="when">
          <h2 className="eyebrow" id="when">
            {ui.whenNumbers[lang]}
          </h2>
          <ul className="mt-3 space-y-2">
            {group.releases.map((release) => (
              <li key={release.what.en} className="flex items-start justify-between gap-3 border-b border-line pb-2 last:border-0 last:pb-0">
                <span className="text-[15px] leading-relaxed text-ink">{release.what[lang]}</span>
                <span className="shrink-0 text-right text-xs text-muted">
                  {release.when[lang]}
                  <span className="block font-mono text-[10px] text-accent">{release.source}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8" aria-labelledby="tools">
        <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl" id="tools">
          {ui.toolsTitle[lang]}
        </h2>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {group.tools.map((tool) => (
            <li key={tool.url} className="card p-5">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-1.5 text-lg font-semibold text-ink hover:text-accent"
              >
                <span>{typeof tool.name === "string" ? tool.name : tool.name[lang]}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
              <p className="mt-0.5 font-mono text-[11px] text-muted">{hostname(tool.url)}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{tool.what[lang]}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">
                  {ui.why[lang]}
                  {lang === "fr" ? " : " : ": "}
                </span>
                {tool.why[lang]}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
