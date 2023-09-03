<template>
    <div class="slider-item">
        <img :src="require('@/assets/slider/' + SliderItem.img)" alt="img_slider">
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
    width: 100vw;
    height: 270px;
    margin: 0 auto;

    & p {
        padding-top: 25px;
        text-align: justify;
        text-indent: 30px;
    }

    & img {
        width: 100vw;
    }
}
</style>