const dev = require('./dev.env.js')
const test = require('./test.env.js')
const prod = require('./prod.env.js')

let config = {
  development: dev,
  test: test,
  production: prod
}

module.exports = config
