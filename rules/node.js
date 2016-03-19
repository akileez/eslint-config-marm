// Node and Common JS

module.exports = {
  // enforce error handling in callbacks
  'handle-callback-err': [2, '^(err|error)$'],

  // disallow use of new operator with the require function
  'no-new-require': 2,

  // disallow string concatenation with __dirname and __filename
  'no-path-concat': 2
}
