// Real world?
//
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

args = { color: 'blue', foo: 'Bar' }
myWidget = factory(args)
myWidget.go()

args.color = 'pink' 
otherWidget = factory(args) // New object, it's pink now
otherWidget.go()

