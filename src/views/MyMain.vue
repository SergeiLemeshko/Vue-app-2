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
    name: "my-main"
}
</script>

<style lang="scss" scoped>
    .main {

    }
</style>