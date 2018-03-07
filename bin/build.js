var os = require('os')
var fs = require('fs')
var path = require('path')
var browserify = require('browserify')
var Readable = require('stream').Readable
var indexFile = 'require(\'./angular\');module.exports = angular;'

fs.writeFileSync(path.join(__dirname, '../dist/index.js'), indexFile)

var js = require('./files').files.angularSrc
  .map(filepath => fs.readFileSync(path.join(__dirname, '../', filepath)))
  .join(os.EOL)

var jsStream = new Readable()

jsStream.push(js)
jsStream.push(null)

var b = browserify(jsStream, { 
  fullPaths: false,
  standalone: 'angular'
})

var source = b.bundle()
var sink = fs.createWriteStream(path.join(__dirname, '../dist/angular.js'))

source.pipe(sink)