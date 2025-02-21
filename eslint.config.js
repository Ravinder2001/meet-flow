import tsEslintParser from "@typescript-eslint/parser";
import eslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  eslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        localStorage: true,
        window: true,
        document: true,
        console: true,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
