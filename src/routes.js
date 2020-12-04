import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import ConcertDetail from './components/ConcertDetail.vue';
import Concerts from './components/Concerts.vue';
import NotFound from './components/NotFound.vue';
import TicketCreate from './components/TicketCreate.vue';
import SignUp from './components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/signin', component: Login},
    {path: '/concerts', component: Concerts},
    {path: '/concerts/:pk', component: ConcertDetail,
            children: [
                {path: 'Tickets', component: TicketCreate}
            ]},
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})