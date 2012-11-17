var t = require('./talk')
// Inherit from other things!
var prot = { foo: 'bar', meaning: '42' }

var obj = Object.create(prot) // Create a new object that inherits directly

t.l( obj.meaning )

obj.foo = 'asdf'

t.l( obj.foo )
t.l( prot.foo )

prot.meaning = 123

t.l( obj.meaning )

