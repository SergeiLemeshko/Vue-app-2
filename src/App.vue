<template>
    <div class="app">
        <my-main/>
    </div>
</template>

<script>
import MyMain from './components/MyMain.vue';

export default {
    name: "app",
    components: {
        MyMain
    }
}

</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

</style>
