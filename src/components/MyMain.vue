<template>
    <div class="main">
        <product-catalog/>
        <cart/>
    </div>
</template>

<script>
import ProductCatalog from "@/components/catalog/ProductCatalog.vue"
import Cart from "@/components/catalog/Cart.vue"

export default {
    name: "my-main",
    components: {
        ProductCatalog,
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