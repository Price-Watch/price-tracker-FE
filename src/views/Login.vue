<template>
    <div>
        <div>
            <h1>Login</h1>
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
        <div>
            <ul v-if="errors" class="error-messages">
                <li>{{ errors }}</li>
            </ul>
            <form @submit.prevent="onSubmit(username, password)">
            <fieldset class="form-group">
              <input
                type="text"
                v-model="username"
                placeholder="Username"
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
              Sign in
            </button>
          </form>
        </div>
    </div>
</template>

<script>
var mapState = require('vuex').default.mapState;
var LOGIN = require('../store/actions.type').LOGIN;
export default {
    name: "login",
    data() {
        return {
            username: null,
            password: null,
        };
    },
    methods: {
        onSubmit(username, password) {
        this.$store
            .dispatch(LOGIN, { username, password })
            .then(() => this.$router.push({ name: "home" }));
        }
    },
    computed: {
        ...mapState({
            errors: (state) => state.auth.errors,
        }),
    },
};
</script>