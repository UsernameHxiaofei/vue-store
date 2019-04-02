// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './style/base.css' //导入公共的样式
import './config/rem.js' //导入rem布局
import Vue from 'vue'
import App from './App' //导入根组件
import router from './router' //导入路由
import store from './store'
import moment from 'moment'
Vue.filter('time', function (data) {
  return moment(data).format('YYYY-MM-DD')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //关联路由跟vue
  store,
  components: { App },
  template: '<App/>'
})
