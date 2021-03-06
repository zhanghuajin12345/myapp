// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端300ms点击延迟解决方案
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 解决手机白屏问题，低端浏览器手机不能使用promise
import 'babel-polyfill'
// vuex
import store from './store/index'

import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
