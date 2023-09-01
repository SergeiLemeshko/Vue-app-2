<template>
    <form 
        class="review-form" 
        v-if="showForm" 
        @click.stop="hideForm" 
        @submit.prevent="onSubmit">
        <div @click.stop class="review-form__content">
            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review"></textarea>
            </p>
            <btn-reviews>
                Оставить отзыв
            </btn-reviews>
        </div>
    </form>
</template>

<script>
import BtnReviews from "@/components/UI/BtnReviews.vue"

export default {
    name: "review-form",
    components: {
        BtnReviews
    },
    data() {
        return {
            review: null
        }
    },
    props: {
        showForm: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        //Скрытие формы по клику вне формы
        hideForm() {
            this.$emit("update:showForm", false)
        },
        onSubmit() {
            let wareReview = {
                review: this.review,
            }
            this.$emit('sendSubmitted', wareReview)
            this.review = null
        }
    }
}
</script>

<style lang="scss" scoped>
    .review-form {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        display: flex;
        background: rgba(0,0,0, 0.5);
    }

    .review-form__content {
        margin: auto;
        border-radius: 10px;
        background: white;
        min-height: 50px;
        min-width: 300px;
        padding: 20px;
    }
</style>