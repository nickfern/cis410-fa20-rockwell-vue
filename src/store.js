import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
        },
        storeUserInApp(state, myUser){
            state.user = myUser 
        },
        storeConcerts(state, myConcerts){
            state.concerts = myConcerts
        }
    },
    actions:{
        getConcerts({commit}){
            axios.get('/Concert')
            .then((myResponse)=>{
                console.log("response from getConcerts action", myResponse)
                commit('storeConcerts', myResponse.data)
            })
            .catch(()=>{console.log("error in getConcerts action")})
        }
    }
})