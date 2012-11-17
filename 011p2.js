var t = require('./talk')
// Invocation Context

function add (a) {
  return this.sum += a
}

sum = 0

a = { add: add, sum: sum }

t.l(add(10)
  , add(10)
  , add(10)
  , sum
  , a.sum
)

