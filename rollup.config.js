import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";

const cssConfig = [
  "src/assets/scss/main.css",
  "theme/hero/hero.css",
  "theme/tuitionTable/tuitionTable.css",
  "theme/phases/phaseList.css",
  "theme/navigation/footer.css",
  "theme/comparisonGrid/comparisonGrid.css",
].map((inputFile) => ({
  input: inputFile,
  output: [
    {
      dir: "dist/css",
      sourcemap: true,
      format: "es",
    },
  ],
  plugins: [
    // peerDepsExternal(),
    // resolve(),
    postcss({ extensions: [".css"], extract: true }),
    del({ targets: ["dist/css/**/*.js", "dist/css/**/*.js.map"], hook: "closeBundle", runOnce: true }),
  ],
}));

const jsConfig = {
  input: "index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({ babelHelpers: "bundled" }),
    commonjs({ extract: true }),
    postcss({ extensions: [".css"] }),
    copy({
      targets:
      [{ src: "src/assets/images/**/*", dest: "dist/images" }],
      verbose: true,
      copyOnce: true,
    }),
  ],
};

export default [
  jsConfig,
  ...cssConfig,
];