import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        concerts: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        }
    },
    actions:{

    }
})