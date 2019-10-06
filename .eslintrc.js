module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: ["react", "jsx-a11y", "import"],
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", "prettier"]
      }
    ],
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "no-underscore-dangle": [1, { allow: ["_id"] }],
    "react/destructuring-assignment": "off",
    "react/prop-types": 0,
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: false }
    ],
    experimentalDecorators: true,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "consistent-return": "off",
    "react/destructuring-assignment": "off"
  }
};
