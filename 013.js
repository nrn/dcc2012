var t = require('./talk')
// Invocation Context

function add (a) {
  return this.sum += a
}

var b = { sum: 0 }

var a = { add : add , sum: 0 }

t.l(a.add.call(b, 10)
  , a.sum
  , b.sum
)