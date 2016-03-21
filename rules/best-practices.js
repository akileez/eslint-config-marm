module.exports = {
  // Enforces getter/setter pairs in objects
  'accessor-pairs': 2,

  // specify the maximum cyclomatic complexity allowed in a program
  'complexity': 2,

  // specify curly brace conventions for all control statements
  // Standard uses multi-line. Turning off.
  'curly': [0, 'multi-line'],

  // enforces consistent newlines before or after dots
  'dot-location': [2, 'property'],

  // require the use of === and !==
  'eqeqeq': [2, "allow-null"],

  // disallow use of arguments.caller or arguments.callee
  'no-caller': 2,

  // disallow use of empty destructuring patterns
  'no-empty-pattern': 2,

  // disallow use of eval()
  'no-eval': 2,

  // disallow adding to native types
  'no-extend-native': 2,

  // disallow unnecessary function binding
  'no-extra-bind': 2,

  // disallow fallthrough of case statements
  'no-fallthrough': 2,

  // disallow the use of leading or trailing decimal points in numeric literals
  'no-floating-decimal': 2,

  // disallow use of eval()-like methods
  'no-implied-eval': 2,

  // disallow usage of __iterator__ property
  'no-iterator': 2,

  // disallow use of labeled statements
  'no-labels': [2, {
    'allowLoop': false,
    'allowSwitch': false
  }],

  // disallow unnecessary nested blocks
  'no-lone-blocks': 2,

  // disallow use of multiple spaces
  // Standard does not allow multi-spaces
  'no-multi-spaces': 0,

  // disallow use of multiline strings
  'no-multi-str': 2,

  // disallow reassignments of native objects
  'no-native-reassign': 2,

  // disallow use of new operator for Function object
  'no-new-func': 2,

  // disallows creating new instances of String,Number, and Boolean
  'no-new-wrappers': 2,

  // disallow use of the new operator when not part of an assignment or comparison
  'no-new': 2,

  // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
  'no-octal-escape': 2,

  // disallow use of octal literals
  'no-octal': 2,

  // disallow usage of __proto__ property
  'no-proto': 2,

  // disallow declaring the same variable more than once
  'no-redeclare': 2,

  // disallow use of assignment in return statement
  'no-return-assign': [2, 'except-parens'],

  // disallow assignments where both sides are exactly the same
  'no-self-assign': 2,

  // disallow comparisons where both sides are exactly the same
  'no-self-compare': 2,

  // disallow use of the comma operator
  'no-sequences': 2,

  // restrict what can be thrown as an exception
  'no-throw-literal': 2,

  // disallow unnecessary .call() and .apply()
  'no-useless-call': 2,

  // disallow use of the with statement
  'no-with': 2,

  // require immediate function invocation to be wrapped in parentheses
  'wrap-iife': [2, 'any'],

  // require or disallow Yoda conditions
  'yoda': [2, 'never']
}
