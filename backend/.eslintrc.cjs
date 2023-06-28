// eslint-disable-next-line no-undef
module.exports = {
  env: { es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^@?\\w", "^\\u0000"],
          ["^@/"],
          [
            "^\\./?$",
            "^\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\./\\.\\.(?!/?$)",
          ],
          ["^@/src/types"],
        ],
      },
    ],
  },
};
