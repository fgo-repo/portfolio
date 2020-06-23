module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "indent": "off",
    "eol-last": "off",
    "quotes": "off",
    "semi": "off",
    "space-before-function-paren": "off",
    "brace-style": "off",
    "no-trailing-spaces": "off",
    "keyword-spacing": "off",
    "space-before-blocks": "off",
    "object-curly-spacing": "off",
    "no-extra-boolean-cast": "off",
    "no-prototype-builtins": "off",
    "comma-dangle": "off",
    "unicorn/prefer-text-content": "off",
    "unicorn/prefer-includes": "off",
    "arrow-parens": "off",
    "new-cap": "off",
    "require-await": "off",
    "vue/html-indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/attributes-order": "off",
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/max-attributes-per-line": "off",
  }
}
