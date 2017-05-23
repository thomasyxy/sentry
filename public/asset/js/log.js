BJ_REPORT.init({
  id: 1,                                // 上报 id, 不指定 id 将不上报
  uin: 123,                             // 指定用户 id, (默认已经读取 qq uin)
  delay: 1000,                          // 当 combo 为 true 可用，延迟多少毫秒，合并缓冲区中的上报（默认）
  url: "/logs/error",                   // 指定上报地址
  //- ignore: [/Script error/i],            // 忽略某个错误
  //- random: 1,                            // 抽样上报，1~0 之间数值，1为100%上报（默认 1）
  //- repeat: 5,                            // 重复上报次数(对于同一个错误超过多少次不上报)
  //-                                       // 避免出现单个用户同一错误上报过多的情况
  //- onReport: function(id, errObj){},     // 当上报的时候回调。 id: 上报的 id, errObj: 错误的对象
  // submit: post,                               // 覆盖原来的上报方式，可以自行修改为 post 上报等
  //- ext: {}                               // 扩展属性，后端做扩展处理属性。例如：存在 msid 就会分发到 monitor,
  //- offlineLog : true,                    // 是否启离线日志 [默认 true]
  //- offlineLogExp : 5,                    // 离线有效时间，默认最近5天
});


setInterval(function() {
  console.log(a.b)
}, 100)
