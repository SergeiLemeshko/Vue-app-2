<template>
    <div class="cart-item">
        <img 
            class="cart-item__img" 
            :src="require('@/assets/img/' + cart_item_info.img)" 
            alt="image"
        >
        <div class="cart-item__info">
            <p>{{ cart_item_info.name }}</p>
            <p>Цена:{{ cart_item_info.price }}</p>
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
    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 45px;
        padding: 0px 25px;
        border: 1px groove #93e6c6;
        box-shadow: 0px 1px 19px -5px rgba(61,148,138,0.95);
                    -webkit-box-shadow: 0px 1px 19px -5px rgba(61,148,138,0.95);
                    -moz-box-shadow: 0px 1px 19px -5px rgba(61,148,138,0.95);
        width: 700px;

        &__img {
            width: 200px;
        }
    }

    .cart-item__info {

    }

    .cart-item__sum {

    }

    .sum__minus, .sum__plus {
        cursor: pointer;
    }

</style>