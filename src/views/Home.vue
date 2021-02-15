<template>
    <div>
        <h1>Hello Vue - Home</h1>
        <router-link
            :to="{ name: 'register' }"
        >
            Register
        </router-link>
        <router-link
            :to="{ name: 'login' }"
        >
            Login
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>