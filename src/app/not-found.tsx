import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { ui } from "@/content/deck";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main className="wrap flex min-h-dvh flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-ink md:text-5xl">
        {ui.notFoundTitle.fr}
      </h1>
      <p lang="en" className="mt-2 font-serif text-2xl text-muted">
        {ui.notFoundTitle.en}
      </p>
      <p className="mt-6 text-sm text-muted">
        {ui.notFoundBody.fr} <span lang="en">{ui.notFoundBody.en}</span>
      </p>
      <Link href="/" className="btn btn-solid mt-8">
        {ui.notFoundLink.fr} / <span lang="en">{ui.notFoundLink.en}</span>
        <ArrowRight />
      </Link>
    </main>
  );
}
