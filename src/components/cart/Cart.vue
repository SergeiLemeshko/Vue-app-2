<template>
    <div class="cart">
        <h1>Cart</h1>
        <cart-item
            v-for="(elem, index) in CART_ARR"
            :key="elem.id"
            :cart_item_info="elem"
            @deleteWareFromCart="deleteWareFromCart(index)"
        />
    </div>
</template>

<script>
import CartItem from "@/components/cart/CartItem.vue"
import { mapGetters, mapActions } from "vuex"

export default {
    name: "cart",
    components: {
        CartItem
    },
    props: {
        //товар, который кладём в корзину
        cart_info: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        ...mapActions({
            "DEL_FROM_CART": 'cart/DEL_FROM_CART',
        }),
        deleteWareFromCart(index) {
            this.DEL_FROM_CART(index)
        }
    },
    computed: {
        ...mapGetters({
            CART_ARR: 'cart/CART_ARR',
        })
    }
}
</script>

<style lang="scss">
.cart {
    position: absolute;
    background-color: rgb(206, 158, 100);
    top: 1200px;
    display: flex;
    margin: 0 auto;
}
</style>