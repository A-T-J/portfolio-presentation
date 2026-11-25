import type { ToolGroup, ToolGroupId } from "../types";
import { automation } from "./automation";
import { build } from "./build";
import { domain } from "./domain";
import { hosting } from "./hosting";
import { inspiration } from "./inspiration";

/** Display order: page creation and hosting first. */
export const toolGroups: ToolGroup[] = [build, domain, hosting, inspiration, automation];

export function findToolGroup(id: string): ToolGroup | undefined {
  return toolGroups.find((group) => group.id === (id as ToolGroupId));
}
