// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.css'  // 公共样式
import 'vue-layer-mobile/need/layer.css'  // 第三方插件  弹出层样式
import layer from 'vue-layer-mobile'  // 第三方插件  弹出层
import filters from './filter' // 定义过滤器
import common from './assets/js/common.js' // 公共函数

Vue.config.productionTip = false
Vue.use(layer)
filters(Vue)
Vue.use(common)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
