import Vue from 'vue'
import Vuex from 'vuex'
import count1 from './count1'
import count2 from './count2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 对 state 中的数据起到包装作用
  getters: {
    showCount (state) {
      return `当前最新的数量是(store/index): ${state.count}`
    }
  },
  // 调用异步代码
  actions: {
    addAc (context, num) {
      setTimeout(() => {
        // 在 actions 中不能直接修改 state 中的数据, 必须调用 mutations 中的方法
        context.commit('add', num)
      }, 2000)
    },
    minusAc (context, num) {
      setTimeout(() => {
        context.commit('minus', num)
      }, 2000)
    }
  },
  // mutations 被赋予修改 state 的权利
  // mutations 中不能写异步的代码。vue 调试器中不生效
  mutations: {
    add (state, num) {
      state.count += num
    },
    minus (state, num) {
      state.count -= num
    }
  },
  modules: {
    count1,
    count2
  }
})
