// 时间格式化封装
function RemainTime(time) {
    let localTime = new Date().getTime(); //获取当前时间戳
    let newTime = new Date(time).getTime(); //获取旧的时间戳
    let remainTime = localTime - newTime; //获取两者之间的时间戳之差
    //   剩余还款时间
    //   let lastTime = new Date(this.lendInfo.lendTime).getTime() - this._.now();
    //   this.lendInfo.remainTime = RemainTime();
    console.log('时间格式化封装', time)
    return '物价'
}

export function linshi() {
    return '零食'
}

export default RemainTime;