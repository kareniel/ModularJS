var browserify = require('browserify')
var files = require('../angularFiles').files.angularSrc
var uglifyify = require('uglifyify')

var b = browserify({ fullPaths: true })

files.forEach(function (file) {
  b.add(file)
})


b.bundle()
  .pipe(process.stdout)