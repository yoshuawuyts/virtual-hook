const noop = require('noop2')
const test = require('tape')
const vhook = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(vhook, /object/)
})

test('should create an object', function (t) {
  t.plan(1)

  const hook = vhook({
    hook: noop
  })
  t.equal(typeof hook, 'object')
})
