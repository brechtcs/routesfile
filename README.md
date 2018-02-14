# routesfile

Parse ROUTES file for static sites

## Install

`npm install routesfile`

## Usage

```js
var routesfile = require('routesfile')

// async
routesfile.read('./ROUTES', function (err, routes) {
  if (err) throw err
  // do something with `routes`
})

// sync
var fs = require('fs')

var file = fs.readFileSync('./ROUTES', 'utf-8')
var routes = routesfile.parse(file)
// do something with `routes`
```

## API

### `var routes = routesfile.parse(string)`

Returns a routes objects of the following format:

```js
{
  [redirectFromUrl: string]: {
    code: [statusCode: number],
    target: [redirectToUrl: string]
  },
  // more routes...
}
```

### `routesfile.read(path, cb)`

Callback with signature `(err, routes)`, with `routes` being the same format as returned by the `parse` method.

## License

Apache-2.0
