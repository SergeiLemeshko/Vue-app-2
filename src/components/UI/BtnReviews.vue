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
    width: 170px;
    height: 50px;
    padding: 6px;
    border-radius: 3px;
    box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.5);
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-size: 12px;
    text-transform: uppercase;
    transition: background-color .3s ease;
    margin-top: 15px;
    cursor: pointer;
    font-family: 'Lucida Sans Unicode';
    letter-spacing: 0.1rem;
    margin-left: 50px;

    &:hover {
        background: darken(#4b4b4b, 7%);
        color: #f5eeee;
        transition: ease-in-out 0.3s;
    }
}

@media (max-width: 992px) {
    .btn-reviews {
        margin-top: 0px;
    }
}
</style>