"use strict"

const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const parse = require('co-body')

console.log(app.env)

const G = {
  C: require('./config')[app.env],
  M: null
}
const localUri = 'http://127.0.0.1'

// middlewares
// app.use(parse)

//错误处理
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
