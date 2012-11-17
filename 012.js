var t = require('./talk')
// Invocation Context

function add (a) {
  return this.sum += a
}

var b = { sum: 12 }

var a = { add : add.bind(b), sum: 0 }

t.l(a.add(10)
  , a.add(10)
  , a.add(10)
  , a.sum
  , b.sum
)