<template>
    <div class="cart-item">
        <img 
            class="cart-item__img" 
            :src="require('@/assets/img/' + cart_item_info.img)" 
            alt="image"
        >
        <div class="cart-item__info-root">
            <div class="cart-item__info">
                <p class="cart-item__info-name">{{ cart_item_info.name }}</p>
                <p class="cart-item__info-price">Price: {{ cart_item_info.price }}</p>
            </div>
            <div 
                class="cart-item__sum">
                <p>Quantity</p>
                <span>
                    <span class="sum__minus" @click="decrElem">-</span>
                        {{ cart_item_info.sum }}
                    <span class="sum__plus" @click="incrElem">+</span>
                </span>
            </div>
        </div>
        <btn-product @click="deleteWareFromCart">Delete</btn-product>
    </div>
</template>

<script>
import BtnProduct from "@/components/UI/BtnProduct.vue"

export default {
    name: "cart-item",
    components: {
        BtnProduct
    },
    props: {
        cart_item_info: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteWareFromCart() {
            this.$emit("deleteWareFromCart")
        },
        decrElem() {
            this.$emit("decrement")

        }, 
        incrElem() {
            this.$emit("increment")
        }
    },
    mounted() {
        // Добавляю свойство sum в объект cart_item_info
        this.cart_item_info['sum'] = 1
    }
}
</script>

<style lang="scss">
$font-family: 'Lucida Sans Unicode';

.cart-item {
    width: 960px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 330px;
    margin-bottom: 20px;

    &__img {
        margin-right: 30px;
        object-fit: cover;
        width: 250px;
        height: 250px;
        border: 1px solid #e9e7e7;
    }
}
.cart-item__info-name {
    margin-bottom: 15px;
    text-align: center;
    font-weight: 600;
    font-family: $font-family;
}
.cart-item__info-price {
    margin-bottom: 5px;
    text-align: center;
    font-family: $font-family;
}
.cart-item__info-root {
    display: flex;
}
.cart-item__info {
    margin-top: -3px;
    width: 150px;
}
.cart-item__sum {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: -13px 50px 0px 100px;

    & p {
        font-family: $font-family;
    }

    & span {
        font-family: $font-family;
        margin-top: 15px;
    }
}
.sum__minus, .sum__plus  {
    cursor: pointer;
}
/* Увеличиваю изображение при наведении */
.cart-item {
    overflow: hidden;
}
img {
    transition: transform 0.25s;
}
.cart-item:hover img {
    transform: scale(1.1);
}

@media (max-width: 2070px) {
    .cart-item {
        margin-left: 150px;
    }
}
@media (max-width: 1880px) {
    .cart-item {
        width: 760px;
        margin-left: 170px;
    }
}
@media (max-width: 1610px) {
    .cart-item__sum {
        margin: -13px 50px 0px 50px;
    }
    .cart-item { 
        margin: 0 auto;
    }
}

@media (max-width: 992px) {
    .cart-item {
        width: 605px;

        &__img {
            margin-right: 10px;
            width: 220px;
            height: 210px;
        }
    }
    .cart-item__sum {
        margin: -13px 20px 0px 7px;

            & span {
            margin-top: 5px;
        }
    }
}
@media (max-width: 767px) {
    .cart-item {
        width: 460px;
        height: 200px;

        &__img {
            margin-right: 5px;
            width: 180px;
            height: 180px;
        }
    }
    .cart-item__info-root {
        flex-direction: column;
    }
    .cart-item__sum {
        margin: -13px 20px 0px 7px;

            & p {
            margin-top: 25px;
        }
    }
    .cart-item__info-name {
        margin-bottom: 5px;
        font-size: 1rem;
    }
}
</style>