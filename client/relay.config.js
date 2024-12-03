module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  language: "typescript", // "javascript" | "typescript" | "flow"
  schema: "./schema.graphql",
  excludes: [
    "**/node_modules/**",
    "**/__mocks__/**",
    "**/__generated__/**",
    "**/.next/**",
  ],
};
