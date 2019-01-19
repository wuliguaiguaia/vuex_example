new Vue({
    el: "#app",
    store,
    data: {

    },
    computed: {
        count(){
            return this.$store.state.count
        },
        type(){
            return this.$store.getters.type
        }
    },
    methods:{
        add(){
            this.$store.commit("add")
        },
        decrease(){
            this.$store.commit("decrease")
        },
        changeEven(){
            this.$store.commit("changeEven")
        },
        sync(){
            this.$store.dispatch("syncAction")
        }
    }
})