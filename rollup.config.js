import path from "path"

import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import globby from "globby"
import copy from "rollup-plugin-copy"
import del from "rollup-plugin-delete"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import svg from "rollup-plugin-svg"
import uglify from "rollup-plugin-uglify"
import { visualizer } from "rollup-plugin-visualizer"

const packageJson = require("./package.json")

// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";

const cssConfig = globby
  .sync(["src/assets/scss/**/*.css", "src/**/*.css", "src/**/*.min.css"])
  .map((inputFile) => {
    return {
      input: inputFile,
      output: [
        {
          dir: `dist/css/${inputFile.replace(path.basename(inputFile), "")}`,
          sourcemap: true,
          format: "es",
        },
      ],
      plugins: [
        peerDepsExternal(),
        resolve(),
        postcss({ extensions: [".css"], extract: true }),
        del({
          targets: ["dist/css/**/*.js", "dist/css/**/*.js.map"],
          hook: "closeBundle",
          runOnce: true,
        }),
      ],
    }
  })

const jsConfig = {
  input: "index.js",
  output: [
    {
      file: packageJson.main,
      compact: true,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      compact: true,
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript(),
    resolve(),
    babel({ babelHelpers: "bundled" }),
    commonjs({ extract: true }),
    postcss({ extensions: [".css"] }),
    svg(),
    copy({
      targets: [{ src: "src/assets/images/**/*", dest: "dist/images" }],
      verbose: true,
      copyOnce: true,
    }),
    process.env.NODE_ENV === "production" && uglify.uglify(),
    visualizer(),
  ],
}

export default [jsConfig, ...cssConfig]
