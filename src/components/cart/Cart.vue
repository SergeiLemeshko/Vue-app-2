<template>
    <div class="cart">
        <router-link :to="{name: 'catalog'}">
            <div class="product-catalog-in__cart">
                <!-- <button>Back</button> -->
            </div>
        </router-link>
            <p class="cart-empty" 
                v-if="!CART_ARR.length">
                <span>Your cart is empty</span>
            </p>
        <cart-item
            v-for="(elem, index) in CART_ARR"
            :key="elem.id"
            :cart_item_info="elem"
            @deleteWareFromCart="deleteWareFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
        <div class="cart-sum" v-show="totalCartSum >= 1">
            <p>Order summary</p>
            <p>Shipping calculated at checkout</p>
            <div class="line"></div>
            <div class="line line-2"></div>
            <div class="cart-sum__total">
                <p>
                    Total:
                    {{ totalCartSum }}
                    <span>€</span>
                </p>
            </div>
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

<style lang="scss" scoped>
.cart {
    display: flex;
    flex-direction: column;
    margin: 200px 0px 50px 0px;
}
.cart-sum {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 500px;
    height: 700px;
    top: 30px;
    right: 280px;
    padding: 50px 10px;
    align-items: center;
    background: rgb(8, 177, 120);
    color: rgb(255, 255, 255);
    font-size: 22px;
}

.cart-sum__total {
    display: flex;
}
.product-catalog-in__cart {
    position: fixed;
    width: 50px;
    height: 20px;
    top: 150px;
    left: 45px;
    background-image: url(@/assets/svg/arrow.svg);
    background-repeat: no-repeat;
    animation:animationArrow 2.5s infinite ease-out;
}
/*Анимация стрелки в корзине */
@keyframes animationArrow {
    0% {transform: scale(1);}
    50% {transform: scale(1.2);}
    100% {transform: scale(1);}
}
.cart-empty {
    display: block;
    margin: 0 auto;
    margin-top: 200px;
    top: 400px;
    font-family: 'Lucida Sans Unicode';
    font-size: 2rem;
    text-transform: uppercase;
}
.line {
    width: 400px;
    border-bottom: 2px solid #f00;
}
.line-2 {
    margin-top: 40px;
}

</style>