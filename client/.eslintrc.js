module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "no-cnosole": "off",
  },
  "parser": "vue-eslint-parser",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "globalReturn": false,
            "impliedStrict": false,
            "jsx": false
        }
    }
}