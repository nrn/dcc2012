var t = require('./talk')
// Inheritance
//
// Easiest way to create an object:

var one = {} // Inherits from Object.prototype
// Same as
var two = new Object
// Same as
var three = Object.create(Object.prototype)

t.l( one
  , two
  , three
  , one.constructor === Object
  , two.constructor === Object
  , three instanceof Object
)
