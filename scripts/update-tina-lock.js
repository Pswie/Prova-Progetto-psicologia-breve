const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "tina");
const schemaPath = path.join(root, "__generated__", "_schema.json");
const lookupPath = path.join(root, "__generated__", "_lookup.json");
const graphqlPath = path.join(root, "__generated__", "_graphql.json");
const lockPath = path.join(root, "tina-lock.json");

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function main() {
  const schema = readJson(schemaPath);
  const lookup = readJson(lookupPath);
  const graphql = readJson(graphqlPath);

  const data = { schema, lookup, graphql };
  fs.writeFileSync(lockPath, JSON.stringify(data));
  console.log("Updated", lockPath);
}

try {
  main();
} catch (error) {
  console.error("Failed to update tina-lock.json:", error);
  process.exitCode = 1;
}
