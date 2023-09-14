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
            <div class="btn-checkout">
                <button type="submit" name="checkout">
                    <span class="btn-checkout__text">proceed to checkout</span>
                </button>
            </div>
            <div class="shop-pay" role="button">
                <span class="shop-pay__link">shop</span>
                <span class="shop-pay__right">Pay</span>
            </div>
            <div class="pay-pal" role="button">
                <span class="pay-pal__link"></span>
                <span class="pay-pal__right"></span>
            </div>
            <div class="g-pay__link" role="button">
                <span class="g-pay__link"></span>
                <span class="g-pay__right">Pay</span>
            </div>
            <div class="payment-icons">
                <span class="payment-icons__title">Secure payment</span>
                    <div class="payment-icons__root">
                        <ul class="payment-icons__list">
                            <li class="payment-icons__item">
                                <img src="@/assets/svg/pay/pay-1.svg" alt="img_payment"/>
                            </li>
                            <li class="payment-icons__item">
                                <img src="@/assets/svg/pay/pay-2.svg">
                            </li>
                            <li class="payment-icons__item">
                                <img src="@/assets/svg/pay/pay-3.svg">
                            </li>
                            <li class="payment-icons__item">
                                <img src="@/assets/svg/pay/pay-4.svg">
                            </li>
                            <li class="payment-icons__item">
                                <img src="@/assets/svg/pay/pay-5.svg">
                            </li>
                            <li class="payment-icons__item">
                                <img src="@/assets/svg/pay/pay-6.svg">
                            </li>
                            <li class="payment-icons__item">
                                <img src="@/assets/svg/pay/pay-7.svg">
                            </li>
                        </ul>
                </div>
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
    background: rgb(241, 242, 243);
    color: rgb(5, 5, 5);
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
.btn-checkout {
    & button {
        width: 100%;
        width: 380px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        border-radius: 2px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 15px;
        cursor: pointer;
    }
}
.btn-checkout__text {

}
.shop-pay {
    background: #5a31f4;
    width: 100%;
    width: 380px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    cursor: pointer;
}
.shop-pay__link {
}
.shop-pay__right {

}

.pay-pal {
    background: #ffc439;
    width: 100%;
    width: 380px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    cursor: pointer;
}
.pay-pal__link {

}
.pay-pal__right {

}
.g-pay {

}
.g-pay__link {

}
.g-pay__right {
    background: #000000;
    width: 100%;
    width: 380px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    cursor: pointer;
}
.payment-icons {
}
.payment-icons__title {
    display: block;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    margin-bottom: 10px;
}
.payment-icons__root {
    margin: 0;
}
.payment-icons__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    flex-wrap: wrap;
}
.payment-icons__item {
    display: inline-block;
    line-height: 1;
    margin: 0;
    width: 40px;
}
</style>