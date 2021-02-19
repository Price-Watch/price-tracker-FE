<template>
    <div>
        <h1>Hello Vue - Home</h1>
        <div v-if="!isAuthenticated">
            <router-link
                :to="{ name: 'register' }"
            >
                Register
            </router-link>
            <router-link
                :to="{ name: 'login' }"
            >
                Login
            </router-link>
        </div>
        <div v-else>
            <div v-if="!trackers || trackers.length === 0">
                No trackers yet. Add one now
            </div>
            <div v-else>
                <span v-for="t in trackers" :key="t.url">{{t.url}}</span>
            </div>
            <form @submit="onSubmit(trackerUrl)">
            <fieldset class="form-group">
              <input
                type="text"
                v-model="trackerUrl"
                placeholder="Tracker URL"
              />
            </fieldset>
            <button>
              Add tracker
            </button>
            </form>
        </div>
    </div>
</template>

<script>
var mapGetters = require('vuex').default.mapGetters;
var FETCH_TRACKERS = require('../store/actions.type').FETCH_TRACKERS;
var ADD_TRACKER = require('../store/actions.type').ADD_TRACKER;
export default {
    name: 'home',
    mounted() {
        this.$store.dispatch(FETCH_TRACKERS);
    },
    methods: {
        onSubmit(trackerUrl) {
            this.$store
                .dispatch(ADD_TRACKER, { trackerUrl })
                .then((data) => {
                    console.log(data);
                });
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'trackers'])
    },
}
</script>