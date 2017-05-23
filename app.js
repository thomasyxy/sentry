"use strict"

const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')()
const Jade = require('koa-jade')
const staticCache = require('koa-static-cache')

const routes = require('./routes')

console.log(`environment: ${app.env}`)

global.G = {}
G.C = require('./config')[app.env]
G.M = require('./models/index')

const localUri = 'http://127.0.0.1'
const isDev = app.env === 'development'

// 配置路由
app.use(routes.routes()).use(routes.allowedMethods())

//静态资源文件
app.use(staticCache('./public', {
  maxAge: 0
}))

const jade = new Jade({
  viewPath: __dirname + "/views",
  debug: isDev,
  pretty: isDev,
  compileDebug: false,
  locals: {
    staticPath: '/static'
  },
  app: app
})

// middlewares
app.use(bodyparser)

// 错误处理
onerror(app, {
  'json': function (err) {
    console.log(err);
    this.body = {
      success: false,
      message: err.message
    }
  },
  'html': function (err) {
    console.log(err);
    this.body = {
      message: '服务器错误'
    }
  }
})

// 空路由处理
app.use(async (ctx, next) => {
  await next()
  if (404 !== ctx.status) return
  ctx.status = 404
  ctx.body = {
    msg: 'not found'
  }
})

/**
 * 监听端口
 */
module.exports = app.listen(G.C.PORT, (err) => {
  if(err){
    console.log(err)
    return
  }
  console.log('> listening at ' + localUri + ':' + G.C.PORT)
})
