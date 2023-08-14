<template>
    <div class="main">
        <product-catalog/>
        <reviews-catalog/>
        <cart v-if="CART_ARR.length"/>
    </div>
</template>

<script>
import ProductCatalog from "@/components/catalog/ProductCatalog.vue"
import ReviewsCatalog from "@/components/reviews/ReviewsCatalog.vue"
import Cart from "@/components/cart/Cart.vue"
import { mapGetters} from "vuex"


export default {
    name: "my-main",
    components: {
        ProductCatalog,
        ReviewsCatalog,
        Cart
    },
    computed: {
        ...mapGetters({
            CART_ARR: 'cart/CART_ARR'
        })
    }
}
</script>

<style lang="scss">
    .main {
        display: flex;
        max-width: 1000px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
</style>