<template>
    <!-- require в теге img обязателен (особенность Vue) -->
    <div class="product-item">
        <div class="product-item__img">
            <img 
                class="product-item__img" 
                :src="require('@/assets/img/' + item_ware.img)" 
                alt="image"
            > 
        </div>
        <p class="product-item__name">{{ item_ware.name }}</p>
        <p class="product-item__price">Цена: {{ item_ware.price }}</p>
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
$font-family: 'Lucida Sans Unicode';

.product-item {
    border: 1px solid #e9e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img {
        object-fit: cover;
        width: 350px;
        height: 350px;
    }
}
.product-item__name {
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 600;
    font-family: $font-family;
}
.product-item__price {
    margin-bottom: 25px;
    text-align: center;
    font-family: $font-family;
}
/* Увеличиваю изображение при наведении */
.product-item__img {
    overflow: hidden;
}
img {
    transition: transform 0.25s;
}
.product-item:hover img {
    transform: scale(1.1);
}
</style>
