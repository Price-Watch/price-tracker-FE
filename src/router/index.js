var Vue = require('vue').default;
var Router = require('vue-router').default;

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(Router);

export default new Router({
    mode: "hash",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        //{
        //    name: 'details',
        //    path: '/details/:id',
        //    component: DetailView
        //}
    ]
});