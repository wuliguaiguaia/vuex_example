console.log(Vuex)
let {mapState,mapGetters,mapActions,mapMutations} = Vuex;
new Vue({
    el: "#app",
    store,
    computed: {
        ...mapState(['count']),
        ...mapGetters(['type'])
    },
    methods:{
        ...mapActions(['syncAction']),
        ...mapMutations(['add','decrease','changeType'])
    }
})