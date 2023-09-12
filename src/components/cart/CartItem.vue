<template>
    <div class="cart-item">
        <img 
            class="cart-item__img" 
            :src="require('@/assets/img/' + cart_item_info.img)" 
            alt="image"
        >
        <div class="cart-item__info">
            <p class="cart-item__info-name">{{ cart_item_info.name }}</p>
            <p class="cart-item__info-price">Цена:{{ cart_item_info.price }}</p>
        </div>
        <div 
            class="cart-item__sum">
            <p>Кол-во:</p>
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
    width: 350px;
    height: 360px;
    border: 1px solid #e9e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 350px;
    margin-bottom: 20px;

    &__img {
        object-fit: cover;
        width: 150px;
        height: 150px;
    }
}
.cart-item__info-name {
    margin-top: 15px;
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

}

.cart-item__sum {


    & p {
        font-family: $font-family;
    }

    & span {
        font-family: $font-family;
    }
}

.sum__minus, .sum__plus {
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