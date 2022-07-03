import Vue from 'vue'
import Vuex from 'vuex'
import vueP from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vueP()],
    state: {
        lylist: [],
        sslist: [],
        ssflag: false
    },
    getters: {},
    mutations: {
        addlist(state, obj) {
            state.lylist.push(obj)
            console.log(state.lylist);
        },
        findmine(state, str) {
            state.sslist = state.lylist.filter(item => {
                return item.username == str
            })
            state.ssflag = true
        },
        all(state) {
            state.ssflag = false
        }
    },
    actions: {},
    modules: {}
})