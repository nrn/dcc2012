var t = require('./talk')

var num = 5555 // Outer scope

function sum (num) { // Middle scope
  return function (a) { // Inner scope
    return num += a
  }
}

var addToNum = sum(1007) // Create a function who's 'num' var stars at 1007

t.p( num )

t.p( addToNum(110) )
t.p( addToNum(110) )
t.p( addToNum(110) )

t.p(num)

