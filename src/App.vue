<template>
    <div id='app'>
        <ptHeader />
        <router-view></router-view>
    </div>
</template>

<script>
import ptHeader from './components/Header.vue';
export default {
    name: 'App',
    components: {
        ptHeader
    }
}
</script>

<style lang="scss">
    @import './main.scss';
</style>