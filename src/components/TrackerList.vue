<template>
    <div>
        <div v-if="isLoading && (!trackers || trackers.length === 0)">
            Loading trackers
        </div>
        <div v-else>
            <div v-if="!trackers || trackers.length === 0">
                No trackers yet. Add one
            </div>
            <tpTrackerPreview v-else
                v-for="(tracker) in trackers"
                :tracker="tracker"
                :key="tracker._id">
            </tpTrackerPreview>
        </div>
        <tpAddTracker />
    </div>
</template>

<script>
var mapGetters = require('vuex').default.mapGetters;
var tpTrackerPreview = require('../views/TrackerPreview.vue').default;
var tpAddTracker = require('../views/AddTracker.vue').default;
var FETCH_TRACKERS = require('../store/actions.type').FETCH_TRACKERS;
export default {
    name: 'tpTrackerList',
    components: {
        tpTrackerPreview,
        tpAddTracker
    },  
    mounted() {
        this.$store.dispatch(FETCH_TRACKERS);
    },
    computed: {
        ...mapGetters(['isLoading', 'trackers'])
    }
};
</script>