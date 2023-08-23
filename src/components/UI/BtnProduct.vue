<template>
    <div>
        <button class="btn-product">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: "btn-product",
}
</script>

<style lang="scss">
.btn-product {
    width: 130px;
    height: 35px;
    padding: 6px;
    border-radius: 5px;
    box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
    background: #c5c3c3;
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-size: 12px;
    text-transform: uppercase;
    transition: background-color .3s ease;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover {
        background: darken(#c2bdbf, 7%);
    }
}
</style>