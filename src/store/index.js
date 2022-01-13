import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store(  {
    state:{
        loader:false
    },
    mutations:{
        LOADER(state,payload){
            state.loader=payload;
        },
    }
})
