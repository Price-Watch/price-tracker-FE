var Vue = require('vue').default;
var Vuex = require('vuex').default;

// var home = require('./home.module');
var auth = require('./auth.module').default;

console.log(Vue);

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    }
})