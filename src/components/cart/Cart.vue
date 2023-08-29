<template>
    <div class="cart">
        <router-link :to="{name: 'catalog'}">
            <div class="product-catalog-in__cart">
                <p>Назад</p>
            </div>
        </router-link>
            <p class="cart-empty" 
                v-if="!CART_ARR.length">
                Корзина пустая
            </p>
        <cart-item
            v-for="(elem, index) in CART_ARR"
            :key="elem.id"
            :cart_item_info="elem"
            @deleteWareFromCart="deleteWareFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
        <div class="cart-sum">
            <p class="cart-sum__total">Итого:</p>
            <p>{{ totalCartSum }} рублей</p>
        </div>
    </div>
</template>

<script>
import CartItem from "@/components/cart/CartItem.vue"
import { mapGetters, mapActions } from "vuex"

export default {
    name: "cart",
    components: {
        CartItem
    },
    props: {
        //товар, который кладём в корзину
        cart_info: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        ...mapActions({
            "DEL_FROM_CART": 'cart/DEL_FROM_CART',
            "INCR_CART_ELEM": 'cart/INCR_CART_ELEM',
            "DECR_CART_ELEM": 'cart/DECR_CART_ELEM'
        }),
        deleteWareFromCart(index) {
            this.DEL_FROM_CART(index)
        },
        increment(index) {
            this.INCR_CART_ELEM(index)
        },
        decrement(index) {
            this.DECR_CART_ELEM(index)
        }
    },
    computed: {
        ...mapGetters({
            CART_ARR: 'cart/CART_ARR',
        }),
        totalCartSum() {
            let sum = [];

            if(this.CART_ARR.length) {
                for(let item of this.CART_ARR) {
                    sum.push(item.price * item.sum) 
                }

                sum = sum.reduce(function (total, el) {
                    return total + el
                })
            }
            return sum;
        }
    }
}
</script>

<style lang="scss">
.cart {
    display: flex;
    flex-direction: column;
    margin: 100px 0px 50px 0px;
}
.cart-sum {
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 10px;
    justify-content: center;
    background: rgb(8, 177, 120);
    color: rgb(255, 255, 255);
    font-size: 22px;

    &__total {
        margin-right: 10px;
    }
}
.product-catalog-in__cart {


    p {
        margin-top: 70px;
        font-family: 'Lucida Sans Unicode';
        font-size: 2rem;
    }
}

.cart-empty {
    font-family: 'Lucida Sans Unicode';
    font-size: 2rem;
}
</style>