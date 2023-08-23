<template>
    <!-- require в теге img обязателен (особенность Vue) -->
    <div class="product-item">
        <img 
            class="product-item__img" 
            :src="require('@/assets/img/' + item_ware.img)" 
            alt="image"
        > 
        <p class="product-item__name">{{ item_ware.name }}</p>
        <p class="product-item__price">Цена: {{ item_ware.price }} р.</p>
        <btn-product @click="addInCart">В корзину</btn-product>
    </div>
</template>

<script>
import BtnProduct from "@/components/UI/BtnProduct.vue"

export default {
    name: "product-item",
    components: {
        BtnProduct
    },
    props: {
        item_ware: {
            type: Object
        }
    },
    methods: {
        addInCart() {
            this.$emit("addInCart", this.item_ware)
        }
    }
}
</script>

<style lang="scss">
    .product-item {
        box-shadow: 0 0 6px 0;
        padding: 10px;
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__img {
            display: block;
            width: 200px;
        }
    }
    .product-item__name {
        margin-bottom: 15px;
        text-align: center;
    }
    .product-item__price {
        margin-bottom: 25px;
        text-align: center;
    }

</style>
