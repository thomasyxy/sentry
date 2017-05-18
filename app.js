"use strict"

const Koa = require('koa')
const app = new Koa()
const parse = require('co-body')
const config = require('./config')[app.env]

// middlewares
app.use(parse)

/**
 * 监听端口
 */
module.exports = app.listen(config.PORT, (err) => {
  if(err){
    console.log(err)
    return
  }
  console.log('> listening at ' + localUri + ':' + G.C.port)
})
