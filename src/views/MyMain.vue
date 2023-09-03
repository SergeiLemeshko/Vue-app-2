<template>
    <div class="main">
        <!--для сохранения состояния при изменении URL-->
        <keep-alive> 
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

export default {
    name: "my-main",
    computed: {

    }
}
</script>

<style lang="scss">
    .main {
        display: flex;
        width: 100vw;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
</style>