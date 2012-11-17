var t = require('./talk')

// Objects are Mutable, and passed by reference!

var o = { foo: 'bar' }

t.p( o )
o.thing = 'asdf' // Add a property
t.p( o )
o.foo = 12 // Change foo from a string to the num 12
t.p( o )

