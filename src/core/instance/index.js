import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 只有在new Vue 时才会执行，_init 方法就是 initMixin中的 _init方法
  this._init(options)
}
// 初始化option相关操作，(<= 此处调用 beforeCreate、create钩子)
initMixin(Vue)
// 数据绑定核心方法
stateMixin(Vue)
// 事件绑定核心方法
eventsMixin(Vue)
// 生命周期核心方法
lifecycleMixin(Vue)
// 渲染核心函数 render/Vnode
renderMixin(Vue)

export default Vue
