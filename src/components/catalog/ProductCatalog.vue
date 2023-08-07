<template>
    <div>
        <h1>ProductCatalog</h1>
        <item-catalog/>
    </div>
</template>

<script>
import ItemCatalog from "@/components/catalog/ItemCatalog.vue"

export default {
    name: "product-catalog",
    components: {
        ItemCatalog,
    },
}
</script>

<style lang="scss">
    
</style>