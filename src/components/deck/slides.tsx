import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check } from "@/components/icons";
import {
  checklist,
  cvProblem,
  intro,
  method,
  needs,
  problem,
  seo,
  slideTitles,
  toolsSlide,
  ui,
  type SlideId,
} from "@/content/deck";
import { toolGroups } from "@/content/tools";
import type { Lang } from "@/content/types";
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
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {intro.body[lang]}
        <span className="ml-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">{intro.byline[lang]}</span>
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button type="button" onClick={onNext} className="btn btn-solid">
          {intro.start[lang]}
          <ArrowRight />
        </button>
        <button type="button" onClick={() => goTo("tools")} className="btn btn-outline">
          {intro.jump[lang]}
        </button>
      </div>
      <ul className="mt-14 flex flex-wrap gap-2" aria-label={slideTitles.tools[lang]}>
        {toolGroups.map((group) => (
          <li key={group.id}>
            <a href={`#tools/${group.id}`} className="tag hover:border-ink/40 hover:text-ink">
              <span className="font-mono font-semibold text-accent">{group.code}</span>
              {group.name[lang]}
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
      <div className="mt-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <p className="rounded-[14px] bg-ink px-5 py-4 text-base font-medium leading-snug text-paper md:text-lg">
          {method.rule[lang]}
        </p>
        <div className="rounded-[14px] border border-line bg-paper-2/60 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{method.exampleLabel[lang]}</p>
          <pre className="mt-2 overflow-x-auto font-mono text-[11px] leading-relaxed text-ink">{method.example}</pre>
        </div>
      </div>
    </SlideFrame>
  );
}

function NeedsSlide({ lang }: SlideProps) {
  return (
    <SlideFrame kicker={needs.kicker[lang]} title={needs.title[lang]}>
      <div className="grid gap-3 md:grid-cols-3">
        {needs.roles.map((role) => (
          <div key={role.role.en} className="card flex flex-col p-5">
            <p className="font-serif text-2xl font-semibold text-ink">{role.role[lang]}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{role.focus[lang]}</p>
            <p className="mt-4 border-t border-line pt-3 text-[15px] leading-relaxed text-ink">{role.formats[lang]}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

function ToolsSlide({ lang }: SlideProps) {
  return (
    <SlideFrame kicker={toolsSlide.kicker[lang]} title={toolsSlide.title[lang]}>
      <p className="-mt-4 mb-6 max-w-2xl text-base text-muted md:-mt-6">{toolsSlide.body[lang]}</p>
      <ol className="grid gap-3 md:grid-cols-2">
        {toolGroups.map((group, index) => (
          <li key={group.id} className={index === toolGroups.length - 1 ? "md:col-span-2" : undefined}>
            <a href={`#tools/${group.id}`} className="card tool-card group flex h-full items-start gap-4 p-5 md:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent font-mono text-sm font-semibold text-accent">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-accent">{group.code}</span>
                  <span className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                    {group.name[lang]}
                  </span>
                </span>
                <span className="mt-1 block text-[15px] leading-relaxed text-muted">{group.tagline[lang]}</span>
                <span className="mt-3 flex items-center justify-between border-t border-line pt-3 text-sm">
                  <span className="text-muted">
                    {group.tools.length} {ui.tools[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                    {ui.open[lang]}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
      <p className="mt-4 rounded-[14px] bg-ink px-5 py-4 text-base font-medium leading-snug text-paper md:text-lg">
        {toolsSlide.order[lang]}
      </p>
    </SlideFrame>
  );
}

function SeoSlide({ lang }: SlideProps) {
  return (
    <SlideFrame kicker={seo.kicker[lang]} title={seo.title[lang]}>
      <p className="-mt-4 mb-4 max-w-2xl text-base text-muted md:-mt-6">{seo.body[lang]}</p>
      <ul className="grid gap-2 md:grid-cols-2">
        {seo.flows.map((flow, index) => (
          <li key={flow.title.en} className="card flex flex-col p-4">
            <p className="font-mono text-xs text-muted">0{index + 1}</p>
            <p className="mt-1.5 text-base font-semibold text-ink">{flow.title[lang]}</p>
            <ol className="mt-3 space-y-1.5">
              {flow.steps.map((step) => (
                <li key={step.en} className="rounded-lg border border-line bg-paper px-3 py-1.5 text-sm text-ink">
                  {step[lang]}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">{flow.note[lang]}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 rounded-[14px] bg-ink px-5 py-3 text-base font-medium leading-snug text-paper md:text-lg">
        {seo.rule[lang]}
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">{seo.rhythm[lang]}</p>
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
        <button type="button" onClick={() => goTo("tools")} className="btn btn-solid">
          {checklist.toTools[lang]}
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
  tools: ToolsSlide,
  seo: SeoSlide,
  checklist: ChecklistSlide,
};
