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
        <btn-reviews>Добавить отзыв</btn-reviews>
    </div>
</template>

<script>
import BtnReviews from "@/components/UI/BtnReviews.vue"
import ReviewsItem from "@/components/reviews/ReviewsItem.vue"
import { mapGetters, mapActions} from "vuex"

export default {
    name: "reviews-catalog",
    components: {
        ReviewsItem,
        BtnReviews
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
        position: absolute;
        top: 800px;
        max-width: 1000px;
    }

    .reviews-catalog__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
</style>