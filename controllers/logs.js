let createError = async function (model, data) {
  let result = {}
  await model.create(data, function(err, res) {
    if(err) {
      result.success = false
      result.message = err
    } else {
      result.success = true
      result.message = '录入日志成功'
      result.data = res._doc
    }
  })
  return result
}


module.exports = {
  async error(ctx) {
    let Error = G.M('error')
    let msg = [],
        colNum = [],
        from = [],
        rowNum = [],
        target = []

    for (let i = 0; i < ctx.query.count; i++) {
      msg.push(ctx.query[`msg[${i}]`])
      colNum.push(ctx.query[`colNum[${i}]`])
      from.push(ctx.query[`from[${i}]`])
      rowNum.push(ctx.query[`rowNum[${i}]`])
      target.push(ctx.query[`target[${i}]`])
    }
    let data = {
      msg: msg,
      colNum: colNum,
      from: from,
      rowNum: rowNum,
      target: target,
      count: ctx.query.count,
      _t: ctx.query._t,
      uin: ctx.query.uin,
      id: ctx.query.id
    }
    await createError(Error, data)
  },
  async error2(ctx) {
    ctx.body = {}
  }
}
