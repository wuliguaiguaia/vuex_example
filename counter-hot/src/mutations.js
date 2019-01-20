export default {    
    add(state) {
        state.count++;
        state.histories.push('add');
    },
    decrease(state) {
        state.count--;
        state.histories.push('decrease');
        console.log('aaa');
    },
    changeType(state) {
        if(state.count % 2 != 0){
           store.commit("add")          
        }
    },
}