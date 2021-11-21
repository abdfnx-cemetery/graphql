import typescript from "rollup-plugin-ts";
import { lezer } from "@lezer/generator/rollup";

export default {
  input: "graphql/main.js",
  external: (id) => id != "tslib" && !/^(\.?\/|\w:)/.test(id),
  output: [
    { file: "dist/main.cjs", format: "cjs" },
    { dir: "./dist", format: "es" },
  ],
  plugins: [lezer(), typescript()],
};
