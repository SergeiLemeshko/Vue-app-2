<template>
    <div class="reviews-item">
        <p class="reviews-item__id">Review №: {{ review.id }}</p>
        <p class="reviews-item__title">Text: {{ review.title }}</p>
    </div>
</template>

<script>
export default {
    name: "product-item",
    props: {
        review: {
            type: Array
        }
    }
}
</script>

<style lang="scss">
.reviews-item {
    width: 790px;
    height: 100px;
    background: #e6e5e5;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 25px;
    font-size: 20px;
}
.reviews-item__id {
    text-align: center;
    font-family: 'Lucida Sans Unicode';
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
.reviews-item__title {
    font-family: 'Lucida Sans Unicode';
    font-size: 18px;
    margin-left: 20px;
}

@media (max-width: 992px) {
    .reviews-item {
        width: 660px;
        height: 120px;
    }
}
@media (max-width: 767px) {
    .reviews-item {
        width: 390px;
        height: 140px;
    }
}
</style>