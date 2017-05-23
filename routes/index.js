const router = require('koa-router')()

const logs = require('./logs')
const test = require('./test')

const home = require('../controllers/home')

router.get('/', home.main)
router.use('/logs', logs.routes())
router.use('/test', test.routes())

module.exports = router
