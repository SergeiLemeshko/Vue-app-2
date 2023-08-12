<template>
    <div class="main">
        <product-catalog/>
        <reviews-catalog/>
        <cart/>
    </div>
</template>

<script>
import ProductCatalog from "@/components/catalog/ProductCatalog.vue"
import ReviewsCatalog from "@/components/reviews/ReviewsCatalog.vue"
import Cart from "@/components/catalog/Cart.vue"

export default {
    name: "my-main",
    components: {
        ProductCatalog,
        ReviewsCatalog,
        Cart
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    .main {
        display: flex;
        max-width: 1200px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
</style>