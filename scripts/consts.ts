import * as path from "@std/path"

// ./scripts/
const ROOT = import.meta.dirname;
if (!ROOT) throw new Error("ROOT is not defined");

// ./
export const REPO_ROOT = path.join(ROOT, "..");
