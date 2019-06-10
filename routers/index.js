const router = require('koa-router')()

const report = require('./report')
router.use('/report', report.routes(), report.allowedMethods())

module.exports = router