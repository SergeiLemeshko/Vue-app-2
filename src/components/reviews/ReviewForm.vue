<template>
    <form 
        class="review-form" 
        v-if="showForm" 
        @click.stop="hideForm" 
        @submit.prevent="onSubmit">
        <div @click.stop class="review-form__content">
            <div class="review-form__excess">
                <p v-show="isVisible">
                    The text must not exceed 100 characters!
                </p>
            </div>
            <p>
                <label for="review"></label>
                <textarea 
                    id="review" 
                    placeholder="Your feedback..." 
                    v-model="review">
                </textarea>
            </p>
            <div class="review-form__btn">
                <btn-reviews>
                    Add 
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
            review: null,
            isVisible: false
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
            if(this.review.length <= 70 ) {
                this.$emit('sendSubmitted', wareReview);
                this.review = null;
                this.isVisible = false;
            } else if(this.review.length >= 70) {
                this.isVisible = true;
            }
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
    height: 520px;
    width: 800px;
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
.review-form__excess {
    display: block;
    height: 30px;
    text-align: center;
    font-family: 'Lucida Sans Unicode';
    font-size: 18px;
    padding-top: 20px;
    color: rgb(221, 56, 27);
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
    margin-left: 0;
}

@media (max-width: 992px) {
    .review-form__content {
        height: 420px;
        width: 700px;
        padding: 20px 50px;

        & label {
            text-align: center;
            text-transform: uppercase;
            font-family: 'Lucida Sans Unicode';
            font-size: 24px;
            font-weight: 700;
            margin: 10px 0px 20px 0px;
        }
    }

    textarea {
        resize: none;
        height: 170px;
        padding: 10px;
        font-size: 1.1rem;
    }
}

@media (max-width: 767px) {
    .review-form__content {
        height: 380px;
        width: 460px;
        padding: 20px 30px;
    }

    .review-form__btn {
        margin-top: 20px;
    }  
    .review-form__excess {
        & p {
            width: 500px;
        }
    }
}
</style>