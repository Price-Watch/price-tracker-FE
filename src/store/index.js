var Vue = require('vue').default;
var Vuex = require('vuex').default;

var home = require('./home.module').default;
var auth = require('./auth.module').default;

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        auth
    }
})