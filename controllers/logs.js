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
    ctx.body = {
    	"code": 200,
    	"data": {
    		"is_auto_renew_card": 0,
    		"is_use_coupon": 1,
    		"order_title": "\u5065\u8eab\u6708\u5361 99.00",
    		"coupon_minus_ids": "",
    		"coupon_minus_value": 0,
    		"coupon_discount_ids": "",
    		"coupon_discount_value": 0,
    		"res_price": 99,
    		"payments": [{
    			"id": 1,
    			"icon": "https:\/\/img.leoao.com\/o_1asj6437rven7rurt33leqooc.png",
    			"title": "\u5fae\u4fe1\u652f\u4ed8",
    			"desc": ""
    		}]
    	},
    	"resultmessage": ""
    }
  }
}
