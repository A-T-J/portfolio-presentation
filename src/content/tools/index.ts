import type { ToolGroup, ToolGroupId } from "../types";
import { automation } from "./automation";
import { domain } from "./domain";
import { hosting } from "./hosting";
import { inspiration } from "./inspiration";
import { website } from "./website";

/** Display order: inspiration first, then website, name, host, automate. */
export const toolGroups: ToolGroup[] = [inspiration, website, domain, hosting, automation];

export function findToolGroup(id: string): ToolGroup | undefined {
  return toolGroups.find((group) => group.id === (id as ToolGroupId));
}
