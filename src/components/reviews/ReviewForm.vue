<template>
    <form class="review-form" v-if="showForm" @click.stop="hideForm">
        <div @click.stop class="review-form__content">
            <slot></slot>
        </div>
    </form>
</template>

<script>
export default {
    name: "review-form",
    props: {
        showForm: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideForm() {
            this.$emit("update:showForm", false)
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