export type Lang = "en" | "fr";

/** A piece of copy in both languages. */
export type Text = Record<Lang, string>;

export type Tool = {
  /** A plain string when the name is the same in both languages. */
  name: string | Text;
  url: string;
  what: Text;
  why: Text;
};

export type Release = {
  what: Text;
  when: Text;
  source: string;
};

/** The five purposes a portfolio tool can serve. */
export type ToolGroupId = "build" | "domain" | "hosting" | "inspiration" | "automation";

export type ToolGroup = {
  id: ToolGroupId;
  code: string;
  featured?: boolean;
  name: Text;
  /** One line shown on the group card. */
  tagline: Text;
  /** Why the group matters, and how the tools in it fit together. */
  why: Text;
  facts: Text[];
  releases: Release[];
  tools: Tool[];
};
