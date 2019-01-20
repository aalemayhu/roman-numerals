#!/usr/bin/env node

const version = require("./package.json").version;
const cli = require("cac")();
const chalk = require("chalk");

const conversion = require("./lib/conversion");

cli.usage("arabic-number-greater-than-0-max-3999");
cli.version(version);
cli.help();

const parsed = cli.parse();

const number = parsed.args[0];
if (number >= 1 && number <= 3999) {
  console.log(number, "->", conversion.toRomanNumeral(number));
} else {
  cli.outputHelp();
  process.exit(1);
}
