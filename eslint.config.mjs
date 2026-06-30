import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // French copy contains many apostrophes/quotes in JSX text; raw
      // entities render correctly, so this rule is noise here.
      "react/no-unescaped-entities": "off",
    },
  },
  // Disable ESLint rules that conflict with Prettier — keep last.
  prettier,
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
