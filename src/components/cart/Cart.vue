<template>
    <div class="cart">
        <h1>Cart</h1>
        <cart-item></cart-item>
    </div>
</template>

<script>
import CartItem from "@/components/cart/CartItem.vue"

export default {
    name: "cart",
    components: {
        CartItem
    },
    methods: {

    }
}
</script>

<style lang="scss">
.cart {
    width: 100px;
    height: 100px;
    background-color: rgb(206, 158, 100);
}
</style>