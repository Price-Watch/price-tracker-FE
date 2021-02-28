<template>
    <div class="add-content">
        <form @submit="onSubmit(trackerName, trackerUrl)">
        <div class="form-group">
            <input
            type="text"
            v-model="trackerName"
            required="true"
            />
            <div class="placeholder">NAME</div>
        </div>
        <div class="form-group">
            <input
            type="text"
            v-model="trackerUrl"
            required="true"
            />
            <div class="placeholder">URL</div>
        </div>
        <button>
            Add tracker
        </button>
        </form>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/addTracker.scss';
</style>

<script>
var ADD_TRACKER = require('../store/actions.type').ADD_TRACKER;
export default {
    name:'tpAddTracker',
    methods: {
        onSubmit(trackerName, trackerUrl) {
            this.$store
                .dispatch(ADD_TRACKER, { name: trackerName,  url: trackerUrl })
                .then(() => {
                    if (this.$router.currentRoute.fullPath !== '/'){
                        this.$router.push({ name: "home" });
                    }
                });
        }
    },
}
</script>