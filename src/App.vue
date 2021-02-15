<template>
    <div id='app'>
        <router-view></router-view>
    </div>
</template>

<script>
var Home = require('./views/Home');

export default {
    name: 'App',
    components: {
        Home
    }
}
</script>

<style></style>