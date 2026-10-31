import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (file.endsWith(".html")) {
      results.push(path.relative(dist, full));
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(dist);
console.log(`Found ${htmlFiles.length} HTML files.`);

let allPassed = true;

for (const file of htmlFiles) {
  if (file.includes("google")) continue;
  const content = fs.readFileSync(path.join(dist, file), "utf8");
  const titleMatch = content.match(/<title>([^<]*)<\/title>/);
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/);
  const ogImgMatch = content.match(/<meta\s+property="og:image"\s+content="([^"]*)"/);
  const hasRootContent = !content.includes('<div id="root"></div>');
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);

  console.log(`\n=== ${file} ===`);
  console.log(`  Title: ${titleMatch ? titleMatch[1] : "NONE"}`);
  console.log(`  Canonical: ${canonicalMatch ? canonicalMatch[1] : "NONE"}`);
  console.log(`  OG Image: ${ogImgMatch ? ogImgMatch[1] : "NONE"}`);
  console.log(`  Has pre-rendered content in #root: ${hasRootContent}`);
  console.log(`  First H1: ${h1Match ? h1Match[1].replace(/<[^>]*>/g, "").trim() : "NONE"}`);

  if (!hasRootContent) {
    allPassed = false;
    console.error(`  [FAIL] ${file} has empty #root!`);
  }
  if (!titleMatch) {
    allPassed = false;
    console.error(`  [FAIL] ${file} missing <title>!`);
  }
}

if (allPassed) {
  console.log("\n>>> ALL PRE-RENDERED PAGES PASSED AUDIT! <<<");
} else {
  console.error("\n>>> AUDIT FAILED! <<<");
  process.exit(1);
}

