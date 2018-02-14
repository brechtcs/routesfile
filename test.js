var routerfile = require('./')
var test = require('tape')

test('read & parse example file', function (t) {
  routerfile.read('./EXAMPLE', function (err, routes) {
    t.notOk(err, 'no error')
    t.notOk(routes[''], 'filter empty lines')
    t.equal(routes['/:year/:month/:day/:slug'].code, 301, 'first status code')
    t.equal(routes['/:year/:month/:day/:slug'].target, '/blog/:slug', 'first target')
    t.equal(routes['/contact'].code, 301, 'second status code')
    t.equal(routes['/contact'].target, '/about', 'second target')
    t.equal(routes['/external'].code, 307, 'third status code')
    t.equal(routes['/external'].target, 'http://example.com', 'third target')
    t.end()
  })
})
