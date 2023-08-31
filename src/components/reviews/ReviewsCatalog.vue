<template>
    <div class="reviews-catalog">
        <review-form v-model:showForm="isFormVisible">
            <h1>FORM</h1>
        </review-form>
        <h1>ReviewsCatalog</h1>
        <div class="reviews-catalog__list">
            <reviews-item
                v-for="item in REVIEWS"
                :key="id"
                :review="item"
            />
        </div>
        <btn-reviews
            @click="showForm">
            Добавить отзыв
        </btn-reviews>
    </div>
</template>

<script>
import BtnReviews from "@/components/UI/BtnReviews.vue"
import ReviewsItem from "@/components/reviews/ReviewsItem.vue"
import ReviewForm from "@/components/reviews/ReviewForm.vue"
import { mapGetters, mapActions} from "vuex"

export default {
    name: "reviews-catalog",
    components: {
        ReviewsItem,
        BtnReviews,
        ReviewForm
    },
    data() {
        return {
            isFormVisible: false,
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
		}),
        showForm() {
            this.isFormVisible = true;
        }
    },
    mounted() {
        this.GET_REVIEWS()
    }
}
</script>

<style lang="scss">
    .reviews-catalog {
        position: absolute;
        top: 200px;
        max-width: 1000px;
    }

    .reviews-catalog__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
</style>