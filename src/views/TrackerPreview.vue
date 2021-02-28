<template>
    <div class="tracker-preview">
        <div class="name">Name: <span v-text="tracker.name"></span></div>
        <div class="url">URL: <span v-text="tracker.url"></span></div>
        <button v-on:click="removeTracker(tracker._id)">Remove</button>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/trackerPreview.scss';
</style>

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