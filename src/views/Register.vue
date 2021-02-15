<template>
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
</template>

<script>
export default {
    name: 'register'
}
</script>