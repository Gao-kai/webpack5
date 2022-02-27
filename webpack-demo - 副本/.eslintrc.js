module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue"],
  rules: {
    "linebreak-style": "off",
    "space-before-blocks": "off",
    "no-unused-vars": 0,
    "indent": "off",
    "no-tabs": "off",
    "quotes": ["error", "double"],
    "quote-props": 0,
  },
};
