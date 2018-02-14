var LINE_FORMAT = /(\d\d\d)\s+(\S+)\s+(\S+)/

var fs = require('fs')

function parse (txt) {
  return txt.split('\n').filter(function (line) {
    return !!line
  }).reduce(function (routes, line) {
    var match = line.match(LINE_FORMAT)
    routes[match[2]] = {
      code: parseInt(match[1]),
      target: match[3]
    }
    return routes
  }, {})
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
