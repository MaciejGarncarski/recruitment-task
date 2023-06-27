// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
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
          ["^@/src/hooks", "^@/src/utils"],
          ["^@/src/components"],
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
