var t = require('./talk')

var one = { foo: 'bar' }

var two = Object.create(one)
two.asdf = 'qwerty'

t.p( one )
t.p( two )
t.p( two.foo )