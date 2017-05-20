const router = require('koa-router')()
const test = require('../controllers/test')

module.exports = router
  .get('/demo1', test.demo1)
  .get('/demo2', test.demo2)
