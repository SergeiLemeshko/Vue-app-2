<template>
    <div class="reviews-item">
        <p class="reviews-item__id">{{ review.id }}</p>
        <p class="reviews-item__title">{{ review.title }}</p>
    </div>
</template>

<script>

export default {
    name: "product-item",
    props: {
        review: {
            type: Array
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
    .reviews-item {
        width: 90px;
        height: 60px;
        box-shadow: 0 0 6px 0;
        padding: 10px;
        margin-bottom: 15px;
        font-size: 10px;
    }

    .reviews-item__title {
        width: 70px;
        height: 40px;
    }
</style>