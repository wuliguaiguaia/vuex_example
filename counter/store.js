Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        count: 11,
    },
    getters: {
        type(state) {
            return state.count % 2 === 0 ? "even" : "odd"
        }
    },
    mutations: {
        add(state) {
            state.count++;
        },
        decrease(state) {
            state.count--;
        },
        changeType(state) {
            if(store.getters.type === "odd"){
               store.commit("add")          
            }
        },
    },
    actions:{
        syncAction({commit}){
            setTimeout(()=>{
                commit("decrease")
            },2000)
        }        
    }
})