<template>
    <div class="reviews-catalog">
        <h1>ReviewsCatalog</h1>
        <div class="reviews-catalog__list">
            <reviews-item
                v-for="item in REVIEWS"
                :key="id"
                :review="item"
            />
        </div>
        <my-button>Добавить отзыв</my-button>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue"
import ReviewsItem from "@/components/reviews/ReviewsItem.vue"
import { mapGetters, mapActions} from "vuex"

export default {
    name: "reviews-catalog",
    components: {
        ReviewsItem,
        MyButton
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            REVIEWS: 'review/REVIEWS',			
		})
    },
    methods: {
        ...mapActions({
			GET_REVIEWS: 'review/GET_REVIEWS',			
		})
    },
    mounted() {
        this.GET_REVIEWS()
    }
}
</script>

<style lang="scss">
    .reviews-catalog {

    }

    .previews-catalog__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
</style>


<!-- 
<template>
    <div class="product-catalog">
        <h1>ProductCatalog</h1>
        <div class="product-catalog__list">
            <product-item
                v-for="item in WARES"
                :key="id"
                :item_ware="item"
                @getIdCard="showIdCard"
            />
        </div>
    </div>
</template>

<script>
import ProductItem from "@/components/catalog/ProductItem.vue"
import { mapGetters, mapActions} from "vuex"

export default {
    name: "product-catalog",
    components: {
        ProductItem,
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            WARES: 'products/WARES',			
		})
    },
    methods: {
        ...mapActions({
			GET_WARES_FROM_DB: 'products/GET_WARES_FROM_DB',			
		}),
        showIdCard(data) {
            console.log(data)
        }
    },
    mounted() {
        this.GET_WARES_FROM_DB()
    }
}
</script>

<style lang="scss">
    .product-catalog {

    }

    .product-catalog__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
</style> -->