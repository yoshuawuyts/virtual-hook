const assert = require('assert')

module.exports = virtualHook

// Virtual-dom hook constructor
// obj -> null
function virtualHook (hooks) {
  assert.equal(typeof hooks, 'object')
  return Object.create(hooks)
}
