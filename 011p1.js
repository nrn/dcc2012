var t = require('./talk')
// Invocation Context

function add (a) {
  return this.sum += a
}

sum = 0

a = { add: add, sum: sum }

t.l(a.add(10)
  , a.add(10)
  , a.add(10)
  , a.sum
  , sum
)

