
module.exports = {
  async error(ctx) {
    await ctx.render('error', {
      title: 'error',
      msg: 'ERROR MESSAGE'
    })
  }
}
