var Vue = require('vue').default;
var VueAxios = require('vue-axios');
var axios = require('axios');
var JWTService = require('./jwt.service').default;
var API_URL = require('./config').API_URL;

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
        this.setHeader();
    },

    setHeader() {
        let token = JWTService.getToken();
        if (token) {
            Vue.axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${token}`;
        } else {
            console.log('Token not found in LS');
        }
        
    },

    get(resource, slug = '') {
        return Vue.axios.get(`${resource}/${slug}`)
            .catch((err) => {
                throw new Error(`ApiService: ${err}`);
            });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    put(resource, slug='', params) {
        return Vue.axios.put(`${resource}/${slug}`, params);
    },

    delete(resource, params) {
        return Vue.axios.delete(`${resource}`, {
            data: params
        })
        .catch((err) => {
            throw new Error(`ApiService: ${err}`);
        });
    }
}

export default ApiService;

export const TrackerService = {
    add(data) {
        return ApiService.post('/tracker/add', data);
    },

    remove(data) {
        return ApiService.delete('tracker/remove', data);
    },

    getList() {
        return ApiService.get('tracker', 'list');
    },

    updateTracker(data) {
        return ApiService.put('tracker', 'update', data);
    }
}