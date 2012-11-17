var t = require('./talk')
// Scope
// Lexical

var num = 12 // Outer scope

function addToNum (a) {
  return num += a // Inner scope
}

t.p( addToNum(10) )
t.p( addToNum(10) )
t.p( addToNum(10) )
t.p( num ) // Outer scope

