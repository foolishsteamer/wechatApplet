// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports = {
//   formatTime: formatTime
// }

// 使用es6的语法 暴露出去
function axios(options){
  // 返回一个promise对象
  return new Promise((resolve,reject)=>{
    wx.request({
      // 短路运算
      url:options.url||'url', //开发者服务器接口地址",
      data:options.data||'data', //请求的参数",
      method:options.method||'GET',
      dataType:options.dataType||'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      header:options.header||{"content-type": "json"},
      success: res => {
        resolve(res)
      }, 
      fail: () => {
        reject('失败啦!')
      },
      complete: () => {}
    });
  })
}  

export default axios;