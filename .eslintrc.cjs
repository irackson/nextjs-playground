/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },

  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",

    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  overrides: [
    {
      files: ["**/.github/workflows/*.yml"],
      plugins: ["yaml"],
      extends: ["plugin:yaml/legacy"],
      rules: {},
    },
  ],
  rules: {
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "off",
      {
        argsIgnorePattern: "^_",
      },
    ],

    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  ignorePatterns: ["!.github"],
};
module.exports = config;
