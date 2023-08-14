<template>
    <div class="app">
        <my-main/>
    </div>
</template>

<script>
import MyMain from './views/MyMain.vue';

export default {
    name: "app",
    components: {
        MyMain
    }
}

</script>

<style lang="scss">
.app {
    position: relative;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

</style>
