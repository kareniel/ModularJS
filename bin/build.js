var browserify = require('browserify')
var files = require('./files').files.angularSrc

var b = browserify({ fullPaths: true })

files.forEach(function (file) {
  b.add(file)
})

b.bundle().pipe(process.stdout)