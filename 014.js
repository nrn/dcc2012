var t = require('./talk')
// Invocation Context

function add () {
  Array.prototype.slice.apply(arguments).forEach(function (num) {
    return this.sum += num
  }.bind(this))
}

var b = { sum: 0 }

var a = { add : add, sum: 0 }

a.add.apply(b, [10, 10, 10])

t.l( a.sum
  , b.sum
)
