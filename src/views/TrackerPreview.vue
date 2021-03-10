<template>
    <div class="tracker-preview">
        <div class="left-container">
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
            <div class="alert-price">
                <label for="alert-price-range"> Alert me at: </label>
                <input 
                    type="range"
                    class="alert-price-range"
                    id="alert-price-range"
                    min="0"
                    max="1000"
                    v-model="alertPrice">
                <span v-text="newAlertPrice"></span>
            </div>
            <button class="remove" v-if="!isEdit" v-on:click="removeTracker(tracker._id)">Remove</button>
            <button v-if="!isEdit" v-on:click="editTracker()">Edit</button>
            <button v-if="!isEdit" v-on:click="updateAlertPrice(newAlertPrice, tracker._id)">Update alert price</button>
            <button v-if="!isEdit" v-on:click="seeTrackerDetails(tracker._id)">Details</button>
            <button class="remove" v-if="isEdit" v-on:click="stopEdit()">Cancel</button>
            <button v-if="isEdit" v-on:click="updateTracker(trackerName, tracker._id)">Save</button>
        </div>
        <div class="right-container">
            <div class="current-price">
                Current: {{tracker.currentPrice}}€
            </div>
            <div class="lowest-price">
                Low: {{tracker.lowestPrice}}€
            </div>
            <div class="highest-price">
                High: {{tracker.highestPrice}}€
            </div>
        </div>
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
            isEdit: false,
            alertPrice: (this.tracker.alertPrice / this.tracker.currentPrice) * 1000
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

        updateAlertPrice(updatedAlertPrice, trackerId) {
            this.$store.dispatch(UPDATE_TRACKER, { 
                tracker: {
                    alertPrice: updatedAlertPrice,
                    _id: trackerId 
                }
            });
        },

        seeTrackerDetails(id) {
            
        },

        editTracker() {
            this.isEdit = true;
        },

        stopEdit() {
            this.isEdit = false;
        }
    },
    computed: {
        newAlertPrice: function() {
            var newPrice = (((this.alertPrice / 1000) * this.tracker.currentPrice).toFixed(2));
            if (this.tracker.currentPrice > 100) {
                return parseInt(newPrice);
            } else {
                return parseFloat(newPrice);
            }
        }
    }
}
</script>