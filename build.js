var readFile  = require('toolz/src/file/readFile')
var writeFile = require('toolz/src/file/writeFile')
var stripJSON = require('toolz/src/file/stripJSON')
var assert    = require('assert')

// Quick build template for removing comments from eslintrc.json

var src  = 'eslintrc.json'
var dest = 'rc/eslintrc.json'

readFile(src, function (err, res) {
  assert.ifError(err)
  writeFile(dest, stripJSON(res), function (err) {
    assert.ifError(err)
    console.log('Strip comments complete')
  })
})