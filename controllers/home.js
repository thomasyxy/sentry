// 主页
module.exports = async ( ctx ) => {
  await ctx.render('home', {
    title: '主页',
    msg: 'hello world'
  })
}
