<template>
    <div class="app">
        <nav-block/>
        <my-main/>
    </div>
</template>

<script>
import MyMain from './views/MyMain.vue';
import NavBlock from "@/components/NavBlock.vue"


export default {
    name: "app",
    components: {
        MyMain,
        NavBlock
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
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

</style>
