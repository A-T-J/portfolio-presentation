import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "@/components/icons";
import {
  automation,
  checklist,
  cvProblem,
  intro,
  method,
  needs,
  problem,
  regionsSlide,
  slideTitles,
  ui,
  type SlideId,
} from "@/content/deck";
import { regions } from "@/content/regions";
import type { Lang } from "@/content/types";
import { Credits } from "./credits";
import { SiteQrCard } from "./site-qr";

export type SlideProps = {
  lang: Lang;
  onNext: () => void;
  goTo: (id: SlideId) => void;
};

function SlideFrame({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
  return (
    <div className="wrap flex min-h-full flex-col justify-center py-6 md:py-8">
      <p className="eyebrow">{kicker}</p>
      <h2 className="mt-3 max-w-5xl font-serif text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-5xl">
        {title}
      </h2>
      <div className="mt-6 md:mt-8">{children}</div>
    </div>
  );
}

function IntroSlide({ lang, onNext, goTo }: SlideProps) {
  return (
    <div className="wrap flex min-h-full flex-col justify-center py-10">
      <p className="eyebrow">{intro.kicker[lang]}</p>
      <h1 className="mt-5 max-w-5xl font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
        {intro.title[lang]}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro.body[lang]}</p>
      <Credits lang={lang} className="mt-6 text-sm sm:hidden" />
      <div className="mt-10 flex flex-wrap gap-3">
        <button type="button" onClick={onNext} className="btn btn-solid">
          {intro.start[lang]}
          <ArrowRight />
        </button>
        <button type="button" onClick={() => goTo("regions")} className="btn btn-outline">
          {intro.jump[lang]}
        </button>
      </div>
      <ul className="mt-14 flex flex-wrap gap-2" aria-label={slideTitles.regions[lang]}>
        {regions.map((region) => (
          <li key={region.id}>
            <a href={`#regions/${region.id}`} className="tag hover:border-ink/40 hover:text-ink">
              <span className="font-semibold text-ink">{region.code}</span>
              {region.name[lang]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProblemSlide({ lang }: SlideProps) {
  return (
    <SlideFrame kicker={problem.kicker[lang]} title={problem.title[lang]}>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {problem.items.map((item) => {
          const sources = Array.isArray(item.source) ? item.source : [item.source];
          return (
            <li key={item.title.en} className="card flex flex-col p-5">
              <h2 className="text-lg font-semibold leading-snug text-ink">{item.title[lang]}</h2>
              <p className="mt-2 whitespace-nowrap text-3xl font-semibold tracking-[-0.03em] text-ink tabular-nums">
                {item.stat[lang]}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.body[lang]}</p>
              <p className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                <span>
                  {ui.source[lang]}
                  {sources.length > 1 ? "s" : ""}:
                </span>
                {sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-ink"
                  >
                    {source.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 rounded-[14px] bg-ink px-5 py-4 text-base font-medium leading-snug text-paper md:text-lg">
        {problem.footer[lang]}
      </p>
    </SlideFrame>
  );
}

function CvProblemSlide({ lang }: SlideProps) {
  return (
    <SlideFrame kicker={cvProblem.kicker[lang]} title={cvProblem.title[lang]}>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="card p-5 md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="font-serif text-2xl font-semibold text-ink">{cvProblem.cv.title[lang]}</h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {cvProblem.cv.tagline[lang]}
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {cvProblem.cv.points.map((point) => (
              <li key={point.en} className="flex items-start gap-2.5 text-[15px] leading-snug text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-line" aria-hidden="true" />
                {point[lang]}
              </li>
            ))}
          </ul>
        </div>

        <div className="card border-accent/40 bg-accent-soft p-5 md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="font-serif text-2xl font-semibold text-ink">{cvProblem.portfolio.title[lang]}</h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
              {cvProblem.portfolio.tagline[lang]}
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {cvProblem.portfolio.points.map((point) => (
              <li key={point.en} className="flex items-start gap-2.5 text-[15px] leading-snug text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {point[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 rounded-[14px] bg-ink px-5 py-4 text-base font-medium leading-snug text-paper md:text-lg">
        {cvProblem.footer[lang]}
      </p>
    </SlideFrame>
  );
}

function MethodSlide({ lang }: SlideProps) {
  return (
    <SlideFrame kicker={method.kicker[lang]} title={method.title[lang]}>
      <ol className="grid gap-3 md:grid-cols-5">
        {method.steps.map((step, index) => (
          <li key={step.title.en} className="card flex flex-col p-5">
            <span className="font-mono text-xs text-muted">0{index + 1}</span>
            <p className="mt-3 text-lg font-semibold leading-tight text-ink">{step.title[lang]}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body[lang]}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 rounded-[14px] bg-ink px-5 py-4 text-base font-medium leading-snug text-paper md:text-lg">
        {method.rule[lang]}
      </p>
    </SlideFrame>
  );
}

function NeedsSlide({ lang }: SlideProps) {
  return (
    <SlideFrame kicker={needs.kicker[lang]} title={needs.title[lang]}>
      <div className="card overflow-hidden">
        <table className="w-full text-left">
          <thead className="border-b border-line bg-paper-2/60">
            <tr>
              <th scope="col" className="eyebrow w-[34%] px-5 py-3 font-normal">
                {needs.headNeed[lang]}
              </th>
              <th scope="col" className="eyebrow px-5 py-3 font-normal">
                {needs.headUse[lang]}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {needs.rows.map((row) => (
              <tr key={row.need.en} className="align-top">
                <th scope="row" className="px-5 py-3.5 text-[15px] font-semibold text-ink">
                  {row.need[lang]}
                </th>
                <td className="px-5 py-3.5 text-[15px] leading-relaxed text-ink">{row.use[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideFrame>
  );
}

function RegionsSlide({ lang }: SlideProps) {
  const featured = regions.filter((region) => region.featured);
  const others = regions.filter((region) => !region.featured);

  return (
    <SlideFrame kicker={regionsSlide.kicker[lang]} title={regionsSlide.title[lang]}>
      <p className="-mt-4 mb-6 max-w-2xl text-base text-muted md:-mt-6">{regionsSlide.body[lang]}</p>
      <ul className="grid gap-3 md:grid-cols-2">
        {featured.map((region) => (
          <li key={region.id}>
            <a href={`#regions/${region.id}`} className="card region-card group flex h-full flex-col p-6 md:p-7">
              <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent">{region.code}</span>
              <span className="mt-3 font-serif text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
                {region.name[lang]}
              </span>
              <span className="mt-2 text-[15px] leading-relaxed text-muted">{region.tagline[lang]}</span>
              <span className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
                <span className="text-muted">
                  {region.tools.length} {ui.tools[lang]}
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                  {ui.open[lang]}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((region) => (
          <li key={region.id}>
            <a href={`#regions/${region.id}`} className="card region-card group flex h-full flex-col p-5">
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-muted">{region.code}</span>
              <span className="mt-2 text-xl font-semibold tracking-[-0.02em] text-ink">{region.name[lang]}</span>
              <span className="mt-1.5 text-sm leading-relaxed text-muted">{region.tagline[lang]}</span>
              <span className="mt-auto flex items-center justify-between pt-4 text-xs">
                <span className="text-muted">
                  {region.tools.length} {ui.tools[lang]}
                </span>
                <ArrowRight className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </SlideFrame>
  );
}

function AutomationSlide({ lang }: SlideProps) {
  return (
    <SlideFrame kicker={automation.kicker[lang]} title={automation.title[lang]}>
      <p className="-mt-4 mb-6 max-w-2xl text-base text-muted md:-mt-6">{automation.body[lang]}</p>
      <ul className="grid gap-3 lg:grid-cols-3">
        {automation.flows.map((flow, index) => (
          <li key={flow.title.en} className="card flex flex-col p-5">
            <p className="font-mono text-xs text-muted">0{index + 1}</p>
            <p className="mt-2 text-lg font-semibold text-ink">{flow.title[lang]}</p>
            <ol className="mt-4 space-y-1">
              {flow.steps.map((step, stepIndex) => (
                <li key={step.en}>
                  <span className="block rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink">{step[lang]}</span>
                  {stepIndex < flow.steps.length - 1 ? (
                    <ArrowDown className="mx-auto my-1 h-3.5 w-3.5 text-muted" />
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-muted">{flow.note[lang]}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-[14px] bg-ink px-5 py-4 text-base font-medium leading-snug text-paper md:text-lg">
        {automation.aiRule[lang]}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{automation.costs[lang]}</p>
    </SlideFrame>
  );
}

function ChecklistSlide({ lang, goTo }: SlideProps) {
  return (
    <SlideFrame kicker={checklist.kicker[lang]} title={checklist.title[lang]}>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-stretch">
        <ol className="grid gap-3 md:grid-cols-2">
          {checklist.items.map((item, index) => (
            <li key={item.en} className="card flex items-center gap-4 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent font-mono text-sm font-semibold text-accent">
                {index + 1}
              </span>
              <span className="text-lg font-medium leading-snug text-ink">{item[lang]}</span>
            </li>
          ))}
        </ol>

        <SiteQrCard title={checklist.qrTitle[lang]} body={checklist.qrBody[lang]} />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => goTo("regions")} className="btn btn-solid">
          {checklist.toRegions[lang]}
          <ArrowRight />
        </button>
        <button type="button" onClick={() => goTo("intro")} className="btn btn-outline">
          {checklist.restart[lang]}
        </button>
        <p className="w-full text-xs text-muted lg:ml-auto lg:w-auto lg:max-w-md lg:text-right">{checklist.notes[lang]}</p>
      </div>
    </SlideFrame>
  );
}

export const slideComponents: Record<SlideId, (props: SlideProps) => ReactNode> = {
  intro: IntroSlide,
  problem: ProblemSlide,
  "cv-problem": CvProblemSlide,
  method: MethodSlide,
  needs: NeedsSlide,
  regions: RegionsSlide,
  automation: AutomationSlide,
  checklist: ChecklistSlide,
};
