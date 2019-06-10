const Koa = require('koa')
const dbConfig = require('./config')
const cors = require('koa2-cors') // 跨越
const bodyParser = require('koa-bodyparser') // post请求
const mongoose = require('mongoose')

const app = new Koa()

mongoose.connect(dbConfig.db, {useNewUrlParser: true, useCreateIndex: true}, (err) => {
    if (err) {
        console.error('Failed to connect to database')
    } else {
        console.log('Connecting database successfully')
    }
})
app.use(cors())
app.use(bodyParser())

const routers = require('./routers/index')
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(dbConfig.port, () => {
    console.log(`the server is start at port ${dbConfig.port}`)
})

