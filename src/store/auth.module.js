var JWTService = require('../common/jwt.service');
var ApiService = require('../common/api.service');

const {
    LOGIN,
    LOGOUT,
    REGISTER,
    VERIFY_TOKEN
} = require('./actions.type');
const {
    SET_ERROR,
    SET_AUTH,
    PURGE_AUTH
} = require('./mutations.type');

const state = {
    errors: null,
    user: {},
    isAuthenticated: !!JWTService.getToken()
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {
    [LOGIN](context, credentials) {
        return new Promise(resolve => {
            ApiService.post('authentication/login', { user: credentials })
                .then(({ data }) => {
                    context.commit(SET_AUTH, data.user);
                    resolve(data);
                })
                .catch((err) => {
                    context.commit(SET_ERROR, err.data.errors);
                });
        });
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH);
    },
    [REGISTER](context, credentials) {
        return new Promise(resolve => {
            ApiService.post('authentication/register', { user: credentials })
                .then(({ data }) => {
                    context.commit(SET_AUTH, data.user);
                    resolve(data);
                })
                .catch((err) => {
                    context.commit(SET_ERROR, err.data.errors);
                    reject(err);
                });
        });
    },
    [VERIFY_TOKEN](context) {
        if (JWTService.getToken()) {
            ApiService.setHeader();
            ApiService.get('authentication/verify')
                .then((data) => {
                    console.log('Token still valid');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        state.errors = {};
        JWTService.saveToken(state.user.token);
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JWTService.destroyToken();
    }
}

export default {
    state,
    actions,
    mutations,
    getters
};
