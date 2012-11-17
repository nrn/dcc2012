function factory (opts) {
  function go () {
    console.log(opts)
  }
  var widget = 
    { go: go
    , opts: opts
    }
  return widget
}

var args = { color: 'blue', foo: 'Bar' }
var myWidget = factory(args)

args.color = 'pink'
var otherWidget = factory(args)

myWidget.go()
otherWidget.go()
console.log(args)
// So what happened?
console.log(args === myWidget.opts && args === otherWidget.opts)
console.log('doh!')
