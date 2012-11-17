var t = require('./talk')
// IMO the only bad part we're talking about today:
// new

function constructor () { // A function, the same as any other
  this.blah = 'Aargh'
}

// Add a property to the object referred
// to by the functions prototype prop
constructor.prototype.hrm = 'Yeah...' 

var obj = new constructor
// Same as 
var other = Object.create(constructor.prototype)
constructor.call(other)

t.l( obj
  , obj.hrm
  , other
  , other.hrm
)

