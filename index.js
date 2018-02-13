var LINE_FORMAT = /(\d\d\d)\s+(\S+)\s+(\S+)/

var fs = require('fs')

function parse (txt) {
  return txt.split('\n').filter(function (line) {
    return !!line
  }).map(function (line) {
    var match = line.match(LINE_FORMAT)
    return {
      code: parseInt(match[1]),
      from: match[2],
      to: match[3]
    }
  })
}

function read (path, cb) {
  fs.readFile(path, 'utf-8', function (err, txt) {
    if (err) {
      return cb(err)
    }
    try {
      var routes = parse(txt)
      cb(null, routes)
    } catch (err) {
      cb(err)
    }
  })
}

module.exports.parse = parse
module.exports.read = read
