<template>
    <div>
        <div class="header">
            <h1>Register</h1>
            <router-link
                :to="{ name: 'login' }"
            >
                Login
            </router-link>
            <router-link
                :to="{ name: 'home' }"
            >
                Home
            </router-link>
        </div>
        <div class="register-form">
            <form @submit.prevent="onSubmit(username, email, password)">
            <div class="form-group">
              <input
                type="text"
                v-model="username"
                required="true"
              />
              <div class="placeholder">USERNAME</div>
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="email"
                required="true"
              />
              <div class="placeholder">EMAIL</div>
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="password"
                required="true"
              />
              <div class="placeholder">PASSWORD</div>
            </div>
            <button>
              Register
            </button>
          </form>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/register.scss';
</style>

<script>
var mapState = require('vuex').default.mapState;
var REGISTER = require('../store/actions.type').REGISTER;
export default {
    name: 'register',
    data() {
        return {
            username: null,
            email: null,
            password: null,
        };
    },
    methods: {
        onSubmit(username, email, password) {
        this.$store
            .dispatch(REGISTER, { username, email, password })
            .then(() => this.$router.push({ name: "home" }));
        }
    },
    computed: {
        ...mapState({
            errors: (state) => state.auth.errors,
        }),
    },
}
</script>