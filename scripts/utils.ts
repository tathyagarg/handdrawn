import * as path from "@std/path";

import { REPO_ROOT } from "@/consts.ts";

export function getUserstyleFiles(): string[] {
  const files: string[] = [];
  for (const dir of Deno.readDirSync(path.join(REPO_ROOT, "styles"))) {
    if (!dir.isDirectory) continue;

    files.push(path.join(REPO_ROOT, "styles", dir.name, "handdrawn.user.less"));
  }

  return files;
}
