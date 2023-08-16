<template>
    <div class="cart-item">
        <img 
            class="cart-item__img" 
            :src="require('@/assets/img/' + cart_item_info.img)" 
            alt="image"
        >
        <div class="cart-item__info">
            <p>{{ cart_item_info.name }}</p>
            <p>{{ cart_item_info.price }}</p>
        </div>
        <div 
            class="cart-item__sum">
            <p>Кол-во:</p>
            {{ cart_item_info.sum }}
        </div>
        <btn-product @click="deleteWareFromCart">Delete</btn-product>
    </div>
</template>

<script>
import BtnProduct from "@/components/UI/BtnProduct.vue"

export default {
    name: "cart-item",
    components: {
        BtnProduct
    },
    props: {
        cart_item_info: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteWareFromCart() {
            this.$emit("deleteWareFromCart")
        }
    },
    mounted() {
        // Добавляю свойство sum в объект cart_item_info
        this.cart_item_info['sum'] = 1
    }
}
</script>

<style lang="scss">
    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(222, 243, 243);
        margin: 15px;

        &__img {
            width: 60px;
        }
    }

    .cart-item__info {

    }

    .cart-item__sum {

    }
</style>