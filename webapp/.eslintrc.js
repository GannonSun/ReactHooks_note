module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), "standard"],
  rules: {
    "no-console": 0
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
// module.exports = {
//   root: true,
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   env: {
//     browser: true,
//     es6: true
//   },
//   extends: [
//     "standard",
//     "plugin:prettier/recommended",
//   ],
//   // required to lint *.vue files
//   plugins: [
//     "react",
//     "import"
//   ],
//   // add your custom rules here
//   rules: {
//     "prettier/prettier": "error",
//     // allow async-await
//     'generator-star-spacing': 'off',
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
//   }
// }