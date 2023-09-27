<template>
    <div class="cart">
        <p class="cart-empty" 
                v-if="!CART_ARR.length">
                <span>Your cart is empty</span>
            </p>
        <div class="cart-left">
            <router-link :to="{name: 'catalog'}">
                <div class="product-catalog-in__cart"></div>
            </router-link>

            <cart-item
                v-for="(elem, index) in CART_ARR"
                :key="elem.id"
                :cart_item_info="elem"
                @deleteWareFromCart="deleteWareFromCart(index)"
                @increment="increment(index)"
                @decrement="decrement(index)"
            />
        </div>
        <div class="cart-right">
            <div class="cart-sum" v-show="totalCartSum >= 1">
            <p class="cart-sum__order">Order summary</p>
            <p class="cart-sum__calculate">Shipping calculated at checkout</p>
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
                    <span>proceed to checkout</span>
                </button>
            </div>
            <div class="shop-pay" role="button">
                <span class="shop-pay__link">shop</span>
                <span class="shop-pay__right">Pay</span>
            </div>
            <div class="pay-pal" role="button">
                <img class="pay-pal__link" src="@/assets/svg/paypal.svg">
                <img src="@/assets/svg/paypal-text.svg">
            </div>
            <div class="g-pay" role="button">
                <img src="@/assets/svg/icon-google.svg">
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
                        </ul>
                    </div>
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
    justify-content: space-between;
    margin: 200px 0px 50px 0px;
    min-height: 900px;
}
.cart-sum {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-right: 470px;
    width: 500px;
    padding: 50px 50px;
    background: rgb(241, 242, 243);
    color: rgb(5, 5, 5);
    font-size: 22px;
}
.cart-sum__total {
    display: flex;
    margin-bottom: 35px;

    & p {
        font-family: 'Lucida Sans Unicode';
        font-size: 24px;
        font-weight: 700;
    }
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
    font-family: 'Lucida Sans Unicode';
    font-size: 2rem;
    text-transform: uppercase;
}
.line {
    width: 100%;
    border-bottom: 1px solid rgb(27, 27, 27);
    margin-bottom: 55px;
}
.line-2 {
    margin-bottom: 25px;
}
.btn-checkout {
    margin-bottom: 22px;

    & button {
        width: 100%;
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

    & span {
        font-family: 'Lucida Sans Unicode';
        font-size: 1rem;
    }
}
.shop-pay {
    background: #5a31f4;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 22px;

    &:hover {
        background: darken(#1522db, 7%);
        transition: ease-in-out 0.1s;
    }
}
.shop-pay__link {
    font-size: 1.6rem;
}
.shop-pay__right {
    display: inline-block;
    background: #ffffff;
    color: #5a31f4;
    text-align: center;
    vertical-align: middle;
    width: 40px;
    height: 25px;
    border-radius: 5px;
    font-size: 1.1rem;
    font-family: 'Lucida Sans Unicode';
    font-weight: 600;
    margin-left: 4px;
}
.pay-pal {
    background: #ffc439;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 22px;

    &:hover {
        background: darken(#ffc439, 7%);
        transition: ease-in-out 0.1s;
    }
}
.pay-pal__link {
    margin-right: 7px;
}
.g-pay {
    background: #020202;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 42px;
}
.g-pay__right {
    margin-left: 5px;
}
.payment-icons__title {
    display: block;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0;
    color: #5f5f5f;
    font-family: 'Lucida Sans Unicode';
    margin-bottom: 15px;
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
    margin-right: 5px;
    width: 50px;
}
.cart-sum__order {
    font-family: 'Lucida Sans Unicode';
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
}
.cart-sum__calculate {
    font-family: 'Lucida Sans Unicode';
    font-size: 18px;
    margin-bottom: 25px;
}
.cart-left {
    margin-right: 20px;
}

@media (max-width: 2250px) {
    .cart-sum {
        margin-right: 300px;
    }
}
@media (max-width: 1805px) {
    .cart-sum {
        margin-right: 240px;
        margin-left: 20px;
    }
}
@media (max-width: 1610px) {
    .cart-sum {
        margin-right: 70px;
    }
    .cart {
        flex-direction: column;
    }
    .cart-sum {
        width: 500px;
        margin: 0 auto;
        margin-top: 50px;
    }
}
@media (max-width: 767px) {
    .cart-right {
        width: 450px;
        margin: 0 auto;
    }
    .cart-sum {
        padding: 40px 40px;
        width: 400px;
    }
}
</style>