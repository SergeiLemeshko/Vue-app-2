<template>
    <div class="reviews-catalog">
        <h1>Reviews about us</h1>
        <review-form 
            v-model:showForm="isFormVisible"
            @sendSubmitted="addReview">
        </review-form>
        <div class="reviews-catalog__list">
            <reviews-item
                v-for="item in REVIEWS"
                :key="id"
                :review="item"
            />
            <div class="reviews-item__individual" v-for="review, index in reviews">
                <p class="reviews-item__id">Review №: {{ `${index + this.numAddReview}` }}</p>
                <p class="reviews-item__title">Text: {{ review.review }}</p>
            </div>
        </div>
        <div class="btn-add">
            <btn-reviews
                @click="showForm">
                Добавить отзыв
            </btn-reviews>
        </div>
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
            isFormVisible: false, //Скрытие/показ формы отзыва
            reviews: [],
            numAddReview: 21, //Для рассчета порядкового номера добавляемого отзыва
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
        //Показ формы
        showForm() {
            this.isFormVisible = true;
        },
        //Добавляем отзыв
        addReview(wareReview) {
            this.reviews.push(wareReview);
            this.isFormVisible = false; //Закрываем форму при клике на кнопку Оставить отзыв
            return;
        }
    },
    mounted() {
        this.GET_REVIEWS();
    }
}
</script>

<style lang="scss">
.reviews-catalog {
    margin: 0 auto;
    width: 1000px;
    margin-top: 160px;
    margin-bottom: 50px;

    & div:nth-child(2n) {
        margin-left: 50px;
    }

    & h1 {
        margin: 0 auto;
        width: 400px;
        margin-bottom: 35px;
        font-family: 'Lucida Sans Unicode';
        font-size: 2.5rem;
        color: #686766;
        text-transform: uppercase;
    }
}
.reviews-catalog__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & :hover {
        transform: scale(1.02);
        background: #ffe9b6;
        transition: ease-in-out 0.2s;
    }
}
.btn-add {
    display: flex;
    align-items: center;
    justify-content: center;
}
.reviews-item__individual {
    width: 790px;
    height: 100px;
    background: #e6e5e5;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 25px;
    font-size: 20px;
}
</style>