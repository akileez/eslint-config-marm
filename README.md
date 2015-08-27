# eslint-config-marm
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

>school·marm `/ˈsko͞olˌmä(r)m/`   
   > a schoolmistress (typically used with reference to a woman regarded as prim, strict, and brisk in manner).

## Rules
Check [feross/standard](https://github.com/feross/standard) for the rules.

marm diverges from Standard in the following ways:   

- indent 2 spaces but only warn if in violation
- key-spacing however you wish
- allow multiple spaces
- operator-line-break set to beginning of line
- array-bracket-spacing -- never
- computed-property-spacing -- never
- object-curly-spacing -- never

## Installation
```bash
$ npm install eslint-config-marm
```

## Usage
Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. Read up on how to use [sharable configs](http://eslint.org/docs/developer-guide/shareable-configs) at the eslint website.

To use the Schoolmarm Standard Style shareable config, first run this:

```bash
npm install eslint-config-marm
```

Then, add this to your .eslintrc file:

```
{
  "extends": "marm"
}
```

*Note: `eslint-config-` prefix is omitted since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

### About No Semicolons
At first, I was appalled, then read ["An Open Letter to JavaScript Leaders Regarding Semicolons"](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding) and formed a new opinion.

In general, `\n` ends a statement unless:

1. The statment has an unclosed paren, array literal, or object literal or ends in some other way that is not a valid way to end a statement. (For instance, ending with `.` or `,`)
2. The line is `--` or `++` (in which case it will decrement/increment the next token)
3. It is a `for()`, `while()`, `do`, `if()` or `else`, and there is no `{`
4. The next line starts with `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, or some other binary operator that can only be found between two tokens in a single expression.



## License
[ISC](https://github.com/akileez/eslint-config-marm/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/eslint-config-marm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-marm
[travis-image]: https://img.shields.io/travis/akileez/eslint-config-marm.svg?style=flat-square
[travis-url]: https://travis-ci.org/akileez/eslint-config-marm
[coveralls-image]: https://img.shields.io/coveralls/akileez/eslint-config-marm.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/akileez/eslint-config-marm?branch=master
[downloads-image]: http://img.shields.io/npm/dm/eslint-config-marm.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/eslint-config-marm
