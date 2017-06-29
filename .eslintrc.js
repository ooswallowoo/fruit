// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi':[0,'never'],
    'no-extra-semi': 0,
    'semi-spacing': 0,
    'keyword-spacing': 0,
    'wrap-iife' : 0,
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'comma-spacing': 0,
    'block-spacing':0,
    'no-sequences':0,
    "no-extra-semi": 0,
    "eqeqeq": 0,
    "one-var": 0,
    "no-undef": 0,
    "no-multi-spaces": 1,
    'space-infix-ops':0,
    'no-return-assign':0,
    'key-spacing':0,
    'quotes':0,
    'yoda':0,
    'no-proto':0,
    'new-parens':0,
    'no-useless-escape':0,
    'new-cap':0,
    'brace-style':0,
    'indent':0,
    'no-redeclare':0
  }
}
