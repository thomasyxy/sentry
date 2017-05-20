module.exports = {
  async ( ctx ) => {
    await ctx.render('index', {
      title: 'sentry',
      msg: ''
    })
  }
}
