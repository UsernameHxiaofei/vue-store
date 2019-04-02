// 提供方法修改state
import state from './state'
const mutations = {
    addCount: (state, payload) => {
        state.count += payload.num
    },
    changeFlag: (state, payload) => { //修改lookList中的flag属性值
      // 通过id找到index在通过index找到数据修改状态为true,其他的为false
      let index = state.lookList.findIndex((item, index) => { return item.id == payload.id})
      let option = state.lookList.filter((item, index) => { return item.id != payload.id})
      state.lookList[index].flag = true
      option.map((item, index) => {item.flag = false})
    },
    changeColor: (state, payload) => {
      let index = state.carList.findIndex((item, index) => { return item.id === payload.id})
      let option = state.carList.filter((item, index) => { return item.id !== payload.id})
      state.carList[index].flag = true
      option.map((item, index) => { item.flag = false})
      state.show = !state.show
    }
}
export default mutations
