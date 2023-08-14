<template>
    <div>
        <button  class="btn-reviews">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: "btn-reviews",
}
</script>

<style lang="scss">
.btn-reviews {
    width: 90px;
    height: 35px;
    padding: 6px;
    border-radius: 5px;
    box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
    background: #5c3048ad;
    text-decoration: none;
    color: white;
    font-size: 10px;
    text-transform: uppercase;
    transition: background-color .3s ease;

    &:hover {
        background: darken(#7c2441, 7%);
    }
}
</style>