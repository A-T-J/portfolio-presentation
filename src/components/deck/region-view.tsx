"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";
import { categories } from "@/content/categories";
import { ui } from "@/content/deck";
import type { Category, Lang, Region } from "@/content/types";
import { CategoryTag } from "./category-tag";

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function RegionView({ region, lang, onBack }: { region: Region; lang: Lang; onBack: () => void }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const present = categories.filter((category) => region.tools.some((tool) => tool.category === category.id));
  const tools = filter === "all" ? region.tools : region.tools.filter((tool) => tool.category === filter);

  return (
    <div className="wrap py-8 md:py-12">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft />
        {ui.backToRegions[lang]}
      </button>

      <header className="mt-5 max-w-4xl">
        <p className="font-mono text-xs font-semibold tracking-[0.14em] text-accent">{region.code}</p>
        <h2 className="mt-2 font-serif text-4xl font-semibold tracking-[-0.04em] text-ink md:text-6xl">
          {region.name[lang]}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{region.why[lang]}</p>
      </header>

      <div className="mt-8 grid gap-3 lg:grid-cols-2">
        <section className="card p-5 md:p-6" aria-labelledby="know-this">
          <h3 id="know-this" className="eyebrow">
            {ui.knowThis[lang]}
          </h3>
          <ul className="mt-4 space-y-3">
            {region.facts.map((fact) => (
              <li key={fact.en} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {fact[lang]}
              </li>
            ))}
          </ul>
        </section>

        <section className="card overflow-hidden" aria-labelledby="releases">
          <h3 id="releases" className="eyebrow px-5 pt-5 md:px-6 md:pt-6">
            {ui.whenNumbers[lang]}
          </h3>
          <table className="mt-3 w-full text-left text-sm">
            <tbody className="divide-y divide-line border-t border-line">
              {region.releases.map((release) => (
                <tr key={release.what.en} className="align-top">
                  <th scope="row" className="w-[38%] px-5 py-3 font-semibold text-ink md:pl-6">
                    {release.what[lang]}
                  </th>
                  <td className="px-3 py-3 text-ink">{release.when[lang]}</td>
                  <td className="px-5 py-3 text-right font-mono text-[11px] text-muted md:pr-6">{release.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section className="mt-10" aria-labelledby="tools">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 id="tools" className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
            {ui.toolsTitle[lang]}
          </h3>
          <p className="text-sm text-muted" aria-live="polite">
            {tools.length} {ui.tools[lang]}
          </p>
        </div>

        <div role="group" aria-label={ui.filterBy[lang]} className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
            className="filter-chip"
          >
            {ui.all[lang]} · {region.tools.length}
          </button>
          {present.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={filter === category.id}
              onClick={() => setFilter(category.id)}
              className="filter-chip"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: category.color }} aria-hidden="true" />
              {category.label[lang]} · {region.tools.filter((tool) => tool.category === category.id).length}
            </button>
          ))}
        </div>

        <ul className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <li key={tool.url} className="card flex flex-col p-5">
              <CategoryTag category={tool.category} lang={lang} />
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-start gap-1.5 text-lg font-semibold leading-snug text-ink hover:text-accent"
              >
                <span className="underline decoration-line decoration-2 underline-offset-4 group-hover:decoration-accent">
                  {typeof tool.name === "string" ? tool.name : tool.name[lang]}
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" />
              </a>
              <p className="mt-0.5 font-mono text-[11px] text-muted">{hostname(tool.url)}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{tool.what[lang]}</p>
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
