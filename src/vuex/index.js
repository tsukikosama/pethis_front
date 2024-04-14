// 导入 vue和vuex,并把vuex挂载到vue实例
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    
    // 全局变量
    state: {
            
            user:JSON.parse(localStorage.getItem('user')),
            breadListState: [] // 面包屑列表数据
            
    },
    // 修改全局变量必须通过mutations中的方法
    mutations: {
        login(state , payload) {
            // console.log(payload + "ss")
            state.user = payload
            // console.log(state.user)
        },
        logout(state) {
            state.user = undefined
        },
        breadListMutations (state, list) {
            state.breadListState = list;
          }
        
    },
    // 异步方法用actions
    // actions不能直接修改全局变量，需要调用commit方法来触发mutations中的方法
    actions: {
        login (context, payload) {
            context.commit('login',payload)
        },
        logout (context) {
            context.commit('logout')
        }
    }
})

