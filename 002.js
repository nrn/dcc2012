var t = require('./talk') // Just some util functions for the talk

// Primitive Values are immutable and passed by value:

var a = 'asdf' // String!

t.l( a // Our test var
, a.slice(2) // Cut out and return the last two chars.
, a.toUpperCase() // Turn everything to caps!
, a.bold() // Wrap it in bold tags?...?
, 'Just plain a:'
, a // What is a now?
)

var b = 123 // Numbers

t.l( b // Print b
, b + 42 // add something to it
, b.toString() // convert it to a string
, 'Just plain b:'
, b // Show what b is now
)
