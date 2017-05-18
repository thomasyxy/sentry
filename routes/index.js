const router = require('koa-router')()

const logs = require('./logs')

const home = require('../controllers/home')

router.get('/', home)
router.use('/logs', logs.routes())

module.exports = router
