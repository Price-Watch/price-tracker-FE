var TrackerService = require('../common/api.service').TrackerService;
const FETCH_TRACKERS = require('./actions.type').FETCH_TRACKERS;
const ADD_TRACKER = require('./actions.type').ADD_TRACKER;
const SET_TRACKERS = require('./mutations.type').SET_TRACKERS;
const START_FETCH = require('./mutations.type').START_FETCH;
const END_FETCH = require('./mutations.type').END_FETCH;

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
        context.commit(START_FETCH);
        return new Promise((resolve, reject) => {
            TrackerService.getList()
                .then(({data}) => {
                    context.commit(SET_TRACKERS, data.trackers);
                    context.commit(END_FETCH);
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
    },
    [START_FETCH](state) {
        state.isLoading = true;
    },
    [END_FETCH](state) {
        state.isLoading = false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};