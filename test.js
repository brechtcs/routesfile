var routerfile = require('./')
var test = require('tape')

test('read & parse example file', function (t) {
  routerfile.read('./EXAMPLE', function (err, routes) {
    t.notOk(err, 'no error')
    t.ok(Array.isArray(routes), 'returns array')
    t.equal(routes.length, 3, 'three routes')
    t.equal(routes[0].code, 301, 'status code')
    t.equal(routes[1].from, '/contact', 'url from')
    t.equal(routes[2].to, 'http://example.com', 'url to')
    t.end()
  })
})
