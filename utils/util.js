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

function axios(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:options.url||'url',
      data:options.data||'data',
      method:options.method||'GET',
      dataType:options.dataType||'json',
      header:options.header||{'content-type':'json'},
      success:res=>{
        resolve(res);
      },
      fail:()=>{
        reject('false');
      },
      complete:()=>{}
    });
  })
}
export default axios;
