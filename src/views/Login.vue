<template>
  <div>
        <h1>Hello Vue - Login</h1>
        <router-link
            :to="{ name: 'register' }"
        >
            Register
        </router-link>
        <router-link
            :to="{ name: 'home' }"
        >
            Home
        </router-link>
    </div>
</template>

<script>
var mapState = require('vuex').default.mapState;
export default {
    name: "login",
    data() {
        return {
            email: null,
            password: null,
        };
    },
    computed: {
        ...mapState({
            errors: (state) => state.auth.errors,
        }),
    },
};
</script>