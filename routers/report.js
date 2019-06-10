const Router = require('koa-router')
const router = new Router()
const reportController = require('./../controllers/report')

router.get('/get', reportController.updateImmedately)
router.get('/update', reportController.updateByTime)
router.post('/getData', reportController.getData)

module.exports = router;