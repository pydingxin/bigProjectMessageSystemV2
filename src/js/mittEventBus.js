// 事件总线
import mitt from 'mitt'
export default new mitt()

/*
用法超简单
import eventBus from '@/js/mittEventBus.js'
eventBus.on('task1',data=>console.log(data))
eventBus.emit("task1",{name:"dingxin"}) //emit只接受一个参数
*/