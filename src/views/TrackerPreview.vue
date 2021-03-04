<template>
    <div class="tracker-preview">
        <div class="name">
            Name: 
                <span v-if="!isEdit" v-text="tracker.name"></span>
                <input
                    v-if="isEdit"
                    type="text"
                    v-model="trackerName"
                    required="true"/>
        </div>
        <div class="url">URL: <span v-text="tracker.url"></span></div>
        <button class="remove" v-if="!isEdit" v-on:click="removeTracker(tracker._id)">Remove</button>
        <button v-if="!isEdit" v-on:click="editTracker()">Edit</button>
        <button v-if="isEdit" v-on:click="updateTracker(trackerName, tracker._id)">Save</button>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/trackerPreview.scss';
</style>

<script>
var REMOVE_TRACKER = require('../store/actions.type').REMOVE_TRACKER;
var UPDATE_TRACKER = require('../store/actions.type').UPDATE_TRACKER;
export default {
    name: 'tpTrackerPreview',
    data() {
        return {
            trackerName: this.tracker.name,
            isEdit: false
        }
    },
    props: {
        tracker: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeTracker(id) {
            this.$store.dispatch(REMOVE_TRACKER, { trackerId: id});
        },

        updateTracker(updatedName, trackerId) {
            this.isEdit = false;
            this.$store.dispatch(UPDATE_TRACKER, { 
                tracker: {
                    name: updatedName,
                    _id: trackerId 
                }
            });
        },

        editTracker() {
            this.isEdit = true;
        }
    }
}
</script>