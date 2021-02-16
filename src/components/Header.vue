<template>
    <nav>
        <div class="hedaer-container">
            <router-link class="header-logo" :to="{ name: 'home' }">
                Home
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
                <div>
                    {{ currentUser }}
                </div>
                <div @click="logout">
                    Log out
                </div>
            </div>
        </div>
    </nav>
</template>

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