/** @jsx h */

import { Configuration } from "twind";
import { blue } from "twind/colors";

/** @type {import('twind').Configuration} */
const config: Configuration = {
  mode: "strict",
  theme: {
    extend: {
      boxShadow: {
        test: `0 0 0 4px ${blue[400]}`,
      },
    },
  },
  plugins: {
    btn: `
      bg-blue-700
      hover:shadow-test
      p-3
      rounded-md
      text-white
      transition-shadow
    `,
  },
};

export default config;
