/*!
 * eslint-config-marm <https://github.com/akileez/eslint-config-marm>
 *
 * Copyright (c) 2015-2016 Keith Williams.
 * Licensed under the ISC license.
 */

module.exports = Object.assign(
  Object.create(null),
  {parserOptions: {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  }},
  {env: {
    'es6': true,
    'node': true
  }},
  {globals: {
    'document': false,
    'navigator': false,
    'window': false
  }},
  {rules: Object.assign(
    Object.create(null),
    require('./rules/possible-errors'),
    require('./rules/best-practices'),
    require('./rules/variables'),
    require('./rules/node'),
    require('./rules/stylistic-issues'),
    require('./rules/ecmascript6')
  )}
)