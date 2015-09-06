var readFile  = require('')
var writeFile = require('')
var stripJSON = require('')
var assert    = require('')

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