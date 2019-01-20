#!/bin/env node

const cli = require("cac")();
const version = require("./package.json").version;

cli.version(version);

cli.option("--eslint [config]", "Choose an ESLint config", {
  default: "standard"
});
cli.option("--name <name>", "Provide your name");

cli.command("lint [...files]", "Lint files").action((files, options) => {
  console.log(files, options);
});

// Display help message when `-h` or `--help` appears
cli.help();
// Display version number when `-v` or `--version` appears
// It's also used in help message

const parsed = cli.parse();

console.log(parsed);
