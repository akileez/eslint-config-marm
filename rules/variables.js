// Variables

module.exports = {
  // disallow deletion of variables
  'no-delete-var': 2,

  // disallow labels that share a name with a variable
  'no-label-var': 2,

  // disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 2,

  // disallow use of undefined when initializing variables
  'no-undef-init': 2,

  // disallow use of undeclared variables unless mentioned in a /*global */ block
  'no-undef': 2,

  // disallow declaration of variables that are not used in the code
  'no-unused-vars': [2, {
    'vars': 'all',
    'args': 'none'
  }]
}
