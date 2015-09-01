# virtual-hook
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

`virtual-dom` hook constructor. Allows access to the constructed DOM Node,
property names and values.

## Installation
```sh
$ npm install virtual-hook
```

## Usage
```js
const vhook = require('virtual-hook')
const vel = require('vel')

vel((h, state) => {
  return h('div', {
    custom-prop: vhook({
      hook: (node, prop, prev) => console.log('prev', prev)
      unhook: (node, prop, next) => console.log('prev', next)
    })
  })
})
```

## API
### virtualHook(hooks)
Create a new hook for `virtual-dom`. Hooks can have the following values:
- `hooks.hook(node, prop, prev)` - create a hook that is run when the
  `virtual-dom` tree is created.
- `hooks.unhook(node, prop, next)` - create a hook that is run when the
  `virtual-dom` tree is destroyed.

## FAQ
### Why would I use hooks?
`virtual-dom` hooks provide access to the created DOM node, changed values and
more. It's a convenient way to get hold of `virtual-dom` output. And call
functions like `.focus()` on elements.

### Why not use the built-in accessor?
`virtual-hook` is a convenience function to access `virtual-dom`'s hook
function. It's built because it's easier to pass in an object with functions
than it is to create the right prototype chain.

## See Also
- [SO: how to access created DOM Node in virtual-dom](http://stackoverflow.com/questions/30667351/virtual-dom-how-to-get-hold-of-real-dom-element-in-order-to-integrate-with-spi)
- [virtual-dom/hooks](https://github.com/Matt-Esch/virtual-dom/blob/master/docs/hooks.md)
- [virtual-hyperscript/hooks](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript/hooks)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/virtual-hook.svg?style=flat-square
[npm-url]: https://npmjs.org/package/virtual-hook
[travis-image]: https://img.shields.io/travis/yoshuawuyts/virtual-hook/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/virtual-hook
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/virtual-hook/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/virtual-hook
[downloads-image]: http://img.shields.io/npm/dm/virtual-hook.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/virtual-hook
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
