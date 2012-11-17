var t = require('./talk')
var sys = require('sys')

var one = { foo: 'bar' }

var two = Object.create(one)
two.asdf = 'qwerty'

t.p( one )
t.p( two )
t.p( two.foo )

two.foo = 'Where did this go?'
t.p( one )
sys.inspect( two, null)