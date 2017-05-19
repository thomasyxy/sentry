const router = require('koa-router')()
const logs = require('../controllers/logs')

module.exports = router
  .get('/error', logs.error)
  .post('/error', logs.error2)
