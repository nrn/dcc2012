// Real world?

function factory (opts) { // Factory takes options and builds a widget

  function go () {
    console.log(opts)
  }

  var widget = 
    { go: go
    , opts: opts
    }

  return widget
}

args = { color: 'blue', name: 'Fred' } // Setup options
myWidget = factory(args) // Create a new object
myWidget.go() // Ask the object to report on it's settings

