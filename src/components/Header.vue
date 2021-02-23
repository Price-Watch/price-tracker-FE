<template>
    <nav>
        <div class="header-container">
            <router-link class="header-logo" :to="{ name: 'home' }">
                Price tracker
            </router-link>
            <div v-if="!isAuthenticated" class="right-actions">
                <div class="right-action">
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </div>
                <div class="right-action">
                    <router-link :to="{ name: 'login' }">
                        Sign in
                    </router-link>
                </div>
                <div class="right-action">
                    <router-link :to="{ name: 'register' }">
                        Sign up
                    </router-link>
                </div>
            </div>
            <div v-else class="right-actions">
                <div class="right-action">
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </div>
                <div class="right-action">
                    {{ currentUser }}
                </div>
                <div class="right-action" @click="logout">
                    Log out
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    @import './header.scss';
</style>

<script>
import { LOGOUT } from '../store/actions.type';
var mapGetters = require('vuex').default.mapGetters;
export default {
    name: 'ptHeader',
    computed: {
        ...mapGetters(['currentUser', 'isAuthenticated'])
    },
    methods: {
        logout() {
            this.$store.dispatch(LOGOUT).then(() => {
                if (this.$router.currentRoute.fullPath !== '/') {
                    this.$router.push({ name: "home" });
                }
            });
        }
    }
}
</script>