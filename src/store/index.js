import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state  from './state'
import mutations from './mutations'
// 创建store对象
const store = new Vuex.Store({
    strict: true, //开启严格模式
    state,
    mutations,
})

export default store