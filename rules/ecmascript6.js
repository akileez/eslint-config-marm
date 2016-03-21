// Ecmascript6

module.exports = {
  // require parens in arrow function arguments
  'arrow-parens': [2, 'always'],

  // require space before/after arrow function's arrow
  'arrow-spacing': [2, {
    'before': true,
    'after': true
  }],

  // verify calls of super() in constructors
  'constructor-super': 2,

  // enforce spacing around the * in generator functions
  'generator-star-spacing': [2, {
    'before': true,
    'after': true
  }],

  // disallow arrow functions where a condition is expected
  // 'no-arrow-condition': 2,

  // disallow modifying variables of class declarations
  'no-class-assign': 2,

  // disallow modifying variables that are declared using const
  'no-const-assign': 2,

  // disallow duplicate name in class members
  'no-dupe-class-members': 2,

  // disallow use of the new operator with the Symbol object
  'no-new-symbol': 2,

  // disallow use of this/super before calling super() in constructors.
  'no-this-before-super': 2,

  // disallow unnecessary constructor
  'no-useless-constructor': 2,

  // enforce spacing around embedded expressions of template strings
  'template-curly-spacing': [2, 'never'],

  // enforce spacing around the * in yield* expressions
  'yield-star-spacing': [2, 'both']
}
