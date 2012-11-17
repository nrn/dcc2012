var t = require('./talk')
// arguments and this pop into the scope.

function test () {
  return arguments
}

t.p( test(1, 2, 3) )

