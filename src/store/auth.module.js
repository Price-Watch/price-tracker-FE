var JWTService = require('../common/jwt.service').default;
var ApiService = require('../common/api.service').default;

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
    username: null,
    isAuthenticated: !!JWTService.getToken()
};

const getters = {
    currentUser(state) {
        return state.username;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {
    [LOGIN](context, credentials) {
        return new Promise(resolve => {
            ApiService.post('authentication/login', credentials)
                .then(({ data }) => {
                    context.commit(SET_AUTH, data);
                    resolve(data);
                })
                .catch((err) => {
                    context.commit(SET_ERROR, err.message);
                });
        });
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH);
    },
    [REGISTER](context, credentials) {
        return new Promise((resolve, reject) => {
            ApiService.post('authentication/register', credentials)
                .then(({ data }) => {
                    context.commit(SET_AUTH, data);
                    resolve(data);
                })
                .catch((err) => {
                    context.commit(SET_ERROR, err.message);
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
    [SET_AUTH](state, authData) {
        state.isAuthenticated = true;
        state.username = authData.username;
        state.errors = null;
        JWTService.saveToken(authData.token);
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.username = null;
        state.errors = null;
        JWTService.destroyToken();
    }
}

export default {
    state,
    actions,
    mutations,
    getters
};
