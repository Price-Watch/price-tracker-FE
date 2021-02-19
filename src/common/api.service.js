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
        Vue.axios.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${JWTService.getToken()}`;
    },

    get(resource, slug = '') {
        return Vue.axios.get(`${resource}/${slug}`)
            .catch((err) => {
                throw new Error(`ApiService: ${err}`);
            })
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    delete(resource, params) {
        return Vue.axios.delete(`${resource}`, params)
            .catch((err) => {
                throw new Error(`ApiService: ${err}`);
            })
    }
}

export default ApiService;

export const TrackerService = {
    add(trackerUrl) {
        return ApiService.post('/tracker/add', {
            url: trackerUrl.trackerUrl
        })
    },

    remove(id) {
        return ApiService.delete('tracker/remove', {
            trackerId: id
        });
    },

    getList() {
        return ApiService.get('tracker', 'list');
    }
}