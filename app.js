const errorHanle = require("./errorHanle")
const restify = require("./restify")
const staticHandle = require("./staticHandle")

const Koa = module.require('koa')

const app = new Koa()

const controller = module.require('./controllerInit')

const bodyParser = module.require('koa-bodyparser')

app.use(bodyParser())

app.use(errorHanle())

app.use(staticHandle())

app.use(restify())

app.use(controller())

app.listen(80)
