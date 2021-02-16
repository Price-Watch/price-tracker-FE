var Vue = require('vue').default;
var VueAxios = require('vue-axios');
var axios = require('axios');
var JWTService = require('./jwt.service').default;
var API_URL = require('./config').API_URL;

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
    },

    setHeader() {
        Vue.axios.default.headers.common[
            'Authorization'
        ] = `Bearer ${JwtService.getToken()}`;
    },

    get(resource, slug = '') {
        return Vue.axios.get(`${resource}/${slug}`)
            .catch((err) => {
                throw new Error(`ApiService: ${err}`);
            })
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    }
}

export default ApiService;