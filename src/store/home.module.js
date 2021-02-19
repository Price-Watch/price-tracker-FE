var TrackerService = require('../common/api.service').TrackerService;
const FETCH_TRACKERS = require('./actions.type').FETCH_TRACKERS;
const SET_TRACKERS = require('./mutations.type').SET_TRACKERS;
const ADD_TRACKER = require('./actions.type').ADD_TRACKER;

const state = {
    trackers: [],
    isLoading: true
}

const getters = {
    isLoading(state) {
        return state.isLoading;
    },
    trackers(state) {
        return state.trackers;
    }
}

const actions = {
    [FETCH_TRACKERS](context) {
        return new Promise((resolve, reject) => {
            TrackerService.getList()
                .then(({data}) => {
                    context.commit(SET_TRACKERS, data.trackers);
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                })
            });
    },
    [ADD_TRACKER](context, trackerUrl) {
        return new Promise((resolve, reject) => {
            TrackerService.add(trackerUrl)
                .then((data) => {
                    context.dispatch(FETCH_TRACKERS);
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }
}

const mutations = {
    [SET_TRACKERS](state, trackers) {
        state.trackers = trackers;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};