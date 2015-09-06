var readFile  = require('')
var writeFile = require('')
var stripJSON = require('')
var assert    = require('')

// Quick build template for removing comments from eslintrc.json

readFile('eslintrc.json', function (err, res) {
  assert.ifError(err)
  writeFile('rc/eslintrc.json', stripJSON(res), function (err) {
    assert.ifError(err)
    console.log('Strip comments complete')
  })
})