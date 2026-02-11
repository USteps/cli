#!/usr/bin/env node
import pkg from "../package.json";
import { sayHello } from "@usteps/create";

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
    console.log(`
Usage: usteps [options]

Options:
  -v, --version  Show version
  -h, --help     Show help
`);
    process.exit(0);
}

if (args.includes("--version") || args.includes("-v")) {
    console.log(pkg.version || "0.0.0");
    process.exit(0);
}

sayHello(args);