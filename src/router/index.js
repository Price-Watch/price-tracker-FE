var Vue = require('vue').default;
var Router = require('vue-router').default;

Vue.use(Router);

export default new Router({
    mode: "hash",
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home')
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('../views/Login')
        },
        {
            name: 'register',
            path: '/register',
            component: () => import('../views/Register')
        }
    ]
});