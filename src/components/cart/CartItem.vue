<template>
    <div class="cart-item">
        <img 
            class="cart-item__img" 
            :src="require('@/assets/img/' + cart_item_info.img)" 
            alt="image"
        >
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
</style>