const ReportDB = require('../models/report')
const uuidv1 = require('uuid/v1')
//手动上报
const updateImmedately = async (ctx, next) => {
    ctx.status = 200
    const uuid = uuidv1()
    const result = await ReportDB.create({
        id: uuid,
        type: 'error-3',
        timestamp: new Date().getTime()
    })
    ctx.body = {
        msg: 'success',
        desc:'success',
        data: result
    }
}
//自动上报
const updateByTime = async (ctx, next) => {
    const uuid = uuidv1()
    const result = await ReportDB.create({
        id: uuid,
        type: 'error-2',
        timestamp: new Date().getTime()
    })
    ctx.body = {
        msg: 'success',
        desc:'success',
        data: result
    }
}
// 获取日志信息
const getData = async (ctx, next) => {
    let req = ctx.request.body
    const result = await ReportDB.find(req, (err, data) => {
        if (err) console.log(err)
        console.log(data)
    })
    ctx.body = {
        msg: 'success',
        desc:'success',
        data: result
    }
}
module.exports = {
    updateImmedately,
    updateByTime,
    getData
}
