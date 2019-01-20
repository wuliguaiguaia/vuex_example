Vue.use(Vuex);
import mutations from "./mutations";
let store = new Vuex.Store({
    state: {
        count: 11,
        histories: ['add']
    },
    getters: {
        type(state) {
            return state.count % 2 === 0 ? "even" : "odd"
        },
        recentHis(state) {
            let end = state.histories.length;
            let begin = end - 5 > 0 ? end - 5 : 0;
            return state.histories.slice(begin, end)
        }

    },
    mutations,
    actions: {
        syncAction({
            commit
        }) {
            setTimeout(() => {
                commit("decrease")
            }, 2000)
        }
    }
})
if (module.hot) {
    module.hot.accept([
        './mutations'
    ], () => {
        const newMutations = require('./mutations').default
        store.hotUpdate({
            mutations: newMutations
        })
    })
}

export default store;