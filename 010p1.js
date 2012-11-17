var t = require('./talk')
// arguments and this pop into the scope.

function test () {
  t.p( arguments )
  return function () {
    t.p( arguments )
  }
}

test(1, 2, 3)('weeeeeeeeee')

