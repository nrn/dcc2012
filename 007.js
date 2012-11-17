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

myWidget.go() // Move the reporting to after both objects are created
otherWidget.go()
console.log(args)

//console.log(args === myWidget.opts && args === otherWidget.opts)
//console.log('doh!')
