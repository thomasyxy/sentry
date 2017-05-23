module.exports = {
  async main(ctx) {
    await ctx.render('index', {
      title: 'sentry',
      msg: ''
    })
  }
}
