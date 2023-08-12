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
        box-shadow: 0 0 6px 0;
        padding: 10px;
        margin-bottom: 15px;
    }
</style>







<!-- <template> -->
    <!-- require в теге img обязателен (особенность Vue) -->
    <!-- <div class="product-item"> -->
        <!-- <img 
            class="product-item__img" 
            :src="require('@/assets/img/' + item_ware.id)" 
            alt="image"
        >  -->
        <!-- <p class="product-item__name">{{ item_ware.id }}</p>
        <p class="product-item__price">Цена: {{ item_ware.email }} р.</p>
        <my-button @click="getIdCard">Добавить в корзину</my-button>
    </div> -->
<!-- </template> -->

<!-- <script>
import MyButton from "@/components/UI/MyButton.vue"

export default {
    name: "product-item",
    components: {
        MyButton
    },
    props: {
        item_ware: {
            type: Array
        }
    },
    methods: {
        getIdCard() {
            this.$emit('getIdCard', this.item_ware.id)
        }
    }
}
</script>

<style lang="scss">
    .product-item {
        box-shadow: 0 0 6px 0;
        padding: 10px;
        margin-bottom: 15px;

        &__img {
            width: 100px;
        }
    }
</style> -->