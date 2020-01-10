{
  "extends": ["taro", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    // it doesn't count ref to interface as use. use @typescript-eslint/no-unused-vars instead
    "no-unused-vars": ["off"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn", { "varsIgnorePattern": "Taro" }],

    "react/sort-comp": "off",

  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
    "project": "./tsconfig.json"
  }
}
