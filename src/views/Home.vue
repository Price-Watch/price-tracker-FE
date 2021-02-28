<template>
    <div>
        <div class="content">
            <h1>Home</h1>
            <div v-if="!isAuthenticated">
                <router-link
                    :to="{ name: 'login' }"
                >
                    Login
                </router-link>
                <router-link
                    :to="{ name: 'register' }"
                >
                    Register
                </router-link>
            </div>
            <div v-else>
                <tpTrackerList />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/home.scss';
</style>

<script>
var mapGetters = require('vuex').default.mapGetters;
var tpTrackerList = require('../components/TrackerList.vue').default;
export default {
    name: 'home',
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    components: {
        tpTrackerList
    }
}
</script>