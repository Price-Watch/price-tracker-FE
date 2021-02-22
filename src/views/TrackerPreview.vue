<template>
    <div class="tracker-preview">
        <p>Tracker name: <span v-text="tracker.name"></span></p>
        <p>Tracker URL: <span v-text="tracker.url"></span></p>
        <button v-on:click="removeTracker(tracker._id)">Remove</button>
    </div>
</template>

<script>
var REMOVE_TRACKER = require('../store/actions.type').REMOVE_TRACKER;
export default {
    name: 'tpTrackerPreview',
    props: {
        tracker: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeTracker(id) {
            this.$store.dispatch(REMOVE_TRACKER, { trackerId: id});
        }
    }
}
</script>