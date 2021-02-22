<template>
    <div>
        <form @submit="onSubmit(trackerName, trackerUrl)">
        <fieldset class="form-group">
            <input
            type="text"
            v-model="trackerName"
            placeholder="Tracker Name"
            />
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
</template>

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