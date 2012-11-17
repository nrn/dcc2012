var difflet = require('difflet')
  , diff = difflet({ indent: 2, comma: 'first' })


module.exports =
  { l: log
  , log: log
  , comp: comp
  , c: comp
  , p: print
  , print: print
  }

function log () {
  var args = Array.prototype.slice.apply(arguments)
    , out = diff.compare(args, args)

  console.log(out + '\n')
}

function print (out)  {
  console.log(out)
  console.log('')
}

function comp (a, b) {
  diff(a, b).pipe(process.stdout)
}

