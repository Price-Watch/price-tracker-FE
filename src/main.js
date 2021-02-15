var Vue = require('vue').default;
var App = require('./App.vue').default;
var store = require('./store');
var router = require('./router').default;

var ApiService = require('./common/api.service').default;

ApiService.init();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');