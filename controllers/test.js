
module.exports = {
  async demo1(ctx) {
    await ctx.render('test', {
      title: 'test demo1',
      msg: '这是一个测试页面'
    })
  },
  async demo2(ctx) {
    await ctx.render('error', {
      title: 'test demo1',
      msg: '这是一个测试页面'
    })
  }
}
