<template>
    <div>
        <div>
            <h1>Hello Vue - Register</h1>
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
        <div>
            <form @submit.prevent="onSubmit(username, email, password)">
            <fieldset class="form-group">
              <input
                type="text"
                v-model="username"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                v-model="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <button>
              Register
            </button>
          </form>
        </div>
    </div>
</template>

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