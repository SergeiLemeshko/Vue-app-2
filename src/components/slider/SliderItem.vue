<template>
    <div class="slider-item">
        <img :src="require('@/assets/slider/' + SliderItem.img)" alt="img_slider">
        <p>{{ SliderItem.name }}</p>
    </div>
</template>

<script>
export default {
    name: "slider-item",
    props: {
        SliderItem: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
.slider-item {
    width: 700px;

    & p {
        padding-top: 25px;
        text-align: justify;
        text-indent: 30px;
    }
}
</style>