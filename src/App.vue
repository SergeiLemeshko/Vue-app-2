<template>
    <div class="app">
        <nav-block/>
        <my-main/>
        <my-footer/>
    </div>
</template>

<script>
import MyMain from './views/MyMain.vue';
import NavBlock from "@/components/NavBlock.vue";
import MyFooter from "@/components/footer/MyFooter.vue"

export default {
    name: "app",
    components: {
        MyMain,
        NavBlock,
        MyFooter
    }
}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.app {
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #151a1f;
}
</style>
