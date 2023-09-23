<template>
    <main class="main">
        <!--для сохранения состояния при изменении URL-->
        <keep-alive> 
            <router-view></router-view>
        </keep-alive>
    </main>
</template>

<script>
export default {
    name: "my-main"
}
</script>

<style lang="scss">
</style>