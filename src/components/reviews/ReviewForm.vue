<template>
    <form 
        class="review-form" 
        v-if="showForm" 
        @click.stop="hideForm" 
        @submit.prevent="onSubmit">
        <div @click.stop class="review-form__content">
            <p>
                <label for="review"></label>
                <textarea 
                    id="review" 
                    placeholder="Your feedback..." 
                    v-model="review"
                    ref="textareaE">
                </textarea>
            </p>
            <div class="review-form__btn">
                <btn-reviews>
                    Add review
                </btn-reviews>
            </div>
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
            this.$emit("update:showForm", false);
            this.review = null;
        },
        onSubmit() {
            let wareReview = {
                review: this.review,
            }
            this.$emit('sendSubmitted', wareReview);
            this.review = null;
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
    border-radius: 4px;
    background: white;
    min-height: 520px;
    min-width: 800px;
    padding: 20px 50px;

    & p {
        display: flex;
        flex-direction: column;

        & label {
            text-align: center;
            text-transform: uppercase;
            font-family: 'Lucida Sans Unicode';
            font-size: 24px;
            font-weight: 700;
            margin: 40px 0px 30px 0px;
        }
    }
}
textarea {
    resize: none;
    height: 250px;
    padding: 15px;
    font-size: 1.1rem;
}
textarea::-webkit-resizer{
    overflow: hidden;
}
textarea::placeholder {
    opacity: 0.5;
    color: rgb(29, 29, 29);
}
.review-form__btn {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
</style>