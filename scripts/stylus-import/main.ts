import usercssMeta from "usercss-meta";
import { ensureDir } from "@std/fs";
import { calcStyleDigest } from "https://raw.githubusercontent.com/openstyles/stylus/ded1a2ec174e6e306f56c0fe5186cb40e416d5bb/src/js/sections-util.js";
import { getUserstyleFiles } from "@/utils.ts";

const settings = {
  settings: {
    updateInverval: 24,
    updateOnlyEnabled: true,
    patchCsp: true,
  }
}

const data: Record<string, unknown>[] = [settings]

for (const file of getUserstyleFiles()) {
  const content = await Deno.readTextFile(file);
  const { metadata } = usercssMeta.parse(content);

  const userstyle = {
    enabled: true,
    name: metadata.name,
    description: metadata.description,
    author: metadata.author,
    url: metadata.url,
    updateUrl: metadata.updateURL,
    usercssData: metadata,
    sourceCode: content,
  }

  userstyle.originalDigest = await calcStyleDigest(userstyle);

  data.push(userstyle);
}

await ensureDir("dist");
await Deno.writeTextFile("dist/import.json", JSON.stringify(data, null, 2));
