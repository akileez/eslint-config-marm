# eslint-config-marm
[![NPM version][npm-image]][npm-url]
[![schoolmarm-standard-style][marm-image]][marm-url]
[![Downloads][downloads-image]][downloads-url]

>school·marm `/ˈsko͞olˌmä(r)m/`   
   > a schoolmistress (typically used with reference to a woman regarded as prim, strict, and brisk in manner).

Do you remember when you were a child and had to stand in line. Well, schoolmarm is here to enforce alignment 
but only when you want to.

**Note:** version 0.2 and greater to be used with eslint v.2.0 and greater  

## Rules
Check [feross/standard](https://github.com/feross/standard) for the rules.

marm diverges from Standard in the following ways:   

- indent 2 spaces but only warn if in violation
- operator-line-break set to beginning of line
- allow multiple spaces

```js
// doing this ... above three rules
  closeAria = createElement('span', {'aria-hidden': true}, '&times;')
            + createElement('span', {class: 'sr-only'}, 'Close')
  close     = createElement('button', {
                class: 'close',
                type: 'button',
                'data-dismiss': dismiss
            }, closeAria)
```

- key-spacing however you wish

```js
// doing this ...
    paths: {
      img   : 'assets/img',
      pdf   : 'assets/pdf',
      ico   : 'assets/ico',
      fonts : 'assets/fonts',
      js    : 'assets/js',
      css   : 'assets/css'
    }
```

- curly has been turned off!

```js
// I have no standard style when it comes to curly braces on if statements. Though I tend
// to always use curly braces for loops.
if (typeof a === 'object') return something

if (!a) {
  doThis(arg1, arg2)
} else {
  doThat(arg1, arg2)
}

if (c && d || e)
  return theOtherThing
else 
  console.log('showMe') 
```

The following three rules are optional with the Standard-plugin (they go either way, I choose `never`)

- array-bracket-spacing -- never
- computed-property-spacing -- never
- object-curly-spacing -- never
- space-before-keywords -- turned off. This conflicts with the above (array-bracket-spacing -- never) in certain circumstances

```js
asyncReduce(fns, args, function (resultObject, v, k, done) {
  v.apply(that, resultObject.concat([function () { // <-- confusion here.
    var err = arguments[0]
    var nextargs = _baseSlice(arguments, 1)
    done(err, nextargs)
  }]))
}, function (err, res) {
  cb.apply(that, [err].concat(res))
})
```

## Installation
```bash
$ npm install eslint-config-marm
```

## Usage
Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. Read up on how to use [sharable configs](http://eslint.org/docs/developer-guide/shareable-configs) at the eslint website.

To use the Schoolmarm Standard Style shareable config, first run this:

```bash
// global install if using eslint from command-line
npm install eslint-config-marm -g
```

Then, add this to your .eslintrc file:

```
{
  "extends": "marm"
}
```

*Note: `eslint-config-` prefix is omitted since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file, like the controversial __no__ semicolons listed below.

### About No Semicolons
At first, I was appalled, then read ["An Open Letter to JavaScript Leaders Regarding Semicolons"](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding) and formed a new opinion. tldr version:

In general, `\n` ends a statement unless:

1. The statment has an unclosed paren, array literal, or object literal or ends in some other way that is not a valid way to end a statement. (For instance, ending with `.` or `,`)
2. The line is `--` or `++` (in which case it will decrement/increment the next token)
3. It is a `for()`, `while()`, `do`, `if()` or `else`, and there is no `{`
4. The next line starts with `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, or some other binary operator that can only be found between two tokens in a single expression.



## License
[ISC](https://github.com/akileez/eslint-config-marm/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/eslint-config-marm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-marm
[marm-image]: https://img.shields.io/badge/code%20style-marm-brightgreen.svg?style=flat-square
[marm-url]: https://github.com/akileez/eslint-config-marm
[downloads-image]: http://img.shields.io/npm/dm/eslint-config-marm.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/eslint-config-marm
