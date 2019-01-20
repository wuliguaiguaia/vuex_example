import store from "./store"
let {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
} = Vuex;
new Vue({
    el: "#app",
    store,
    computed: {
        ...mapState(['count','histories']),
        ...mapGetters(['type','recentHis'])
    },
    methods: {
        ...mapActions(['syncAction']),
        ...mapMutations(['add', 'decrease', 'changeType'])
    }
})