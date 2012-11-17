var t = require('./talk')
// Arrays are Objects are Mutable!

var a = [ 'zero', 'one', 'two', 'three', 'four', 'five' ]

t.p( a ) // Show it

t.p( a.sort() ) // Sort it

t.p( a = a.map(caps) ) // Capitalize all the words

t.p( a ) // What does it look like now?

// Takes a string and returns it in all caps
function caps (str) {
  return str.toUpperCase()
}

