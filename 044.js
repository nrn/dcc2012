var t = require('./talk')
function constructor () { // A function, the same as any other
  this.blah = 'Aargh'
}
constructor.prototype.hrm = 'Yeah...' 
 
// So what happend?
var obj = new constructor

// New created an object that inherited from constructor.prototype
// Then magically executed constructor in it's context
// and then returned that object for some reason.

var other = Object.create(constructor.prototype)
constructor.call(other)

t.l( obj
  , obj.hrm
  , other
  , other.hrm
)
