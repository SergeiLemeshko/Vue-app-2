<template>
    <slider-list
        :interval="7000" 
    />
    <router-link :to="{name: 'cart'}">
        <div class="product-catalog-in__cart">
            <span 
                v-show="CART_ARR.length >= 1" 
                ref="cartlength">
                {{ CART_ARR.length }}
            </span>
        </div>
    </router-link>
    <div class="product-catalog">
        <div class="product-catalog__search">
            <input 
                type="text"
                class="product-catalog__input"
                v-model="searchWare"
                placeholder="Search..."
                autofocus
            />
        </div>
        <div class="product-catalog__list">
            <product-item
            v-for="item in searchProducts"
            :key="id"
            :item_ware="item"
            @addInCart="addInCart"
            />
        </div>
    </div>
</template>

<script>
import ProductItem from "@/components/catalog/ProductItem.vue"
import SliderList from '@/components/slider/SliderList.vue';
import { mapGetters, mapActions} from "vuex"

export default {
    name: "product-catalog",
    components: {
        ProductItem,
        SliderList
    },
    data() {
        return {
            // массив обуви
            ware: [
                {
                    name: "QUISS 5040",
                    price: 2100,
                    id: "1",
                    article: "F8G",
                    img: "1.jpg",
                    available: true
                },
                {
                    name: "MASQUISS 2030",
                    price: 3150,
                    id: "2",
                    article: "NB7",
                    img: "2.jpg",
                    available: true
                },
                {
                    name: "QUISS 2040",
                    price: 4200,
                    id: "3",
                    article: "2BM",
                    img: "3.jpg",
                    available: false
                },
                {
                    name: "QUISS 3080",
                    price: 5300,
                    id: "4",
                    article: "HL4",
                    img: "4.jpg",
                    available: true
                },
                {
                    name: "SENQUISS 1020",
                    price: 6500,
                    id: "5",
                    article: "3BN",
                    img: "5.jpg",
                    available: false
                },
                {
                    name: "QUISS 6000",
                    price: 8700,
                    id: "6",
                    article: "CS9",
                    img: "6.jpg",
                    available: true
                },
                {
                    name: "SENQUISS 0090",
                    price: 2100,
                    id: "7",
                    article: "ML4",
                    img: "7.jpg",
                    available: true
                },
                {
                    name: "SENQUISS 8050",
                    price: 3150,
                    id: "8",
                    article: "FZ5",
                    img: "8.jpg",
                    available: true
                },
                {
                    name: "MASQUISS 2020",
                    price: 4200,
                    id: "9",
                    article: "3VV",
                    img: "9.jpg",
                    available: false
                },
                {
                    name: "SENQUISS 4020",
                    price: 5300,
                    id: "10",
                    article: "B89",
                    img: "10.jpg",
                    available: true
                },
                {
                    name: "MASQUISS 5070",
                    price: 6500,
                    id: "11",
                    article: "DC6",
                    img: "11.jpg",
                    available: false
                },
                {
                    name: "SENQUISS 6080",
                    price: 8700,
                    id: "12",
                    article: "J3G",
                    img: "12.jpg",
                    available: true
                }
            ],
            searchWare: ""
        }
    },
    methods: {
        ...mapActions({
            "ADD_IN_CART": 'cart/ADD_IN_CART',
    }),
        addInCart(data) {
            this.ADD_IN_CART(data);
            // Смещение двузначного числа на корзине
            this.CART_ARR.length >= 10 ? this.$refs.cartlength.classList.add("span-left") : null;
        },
    },
    computed: {
        ...mapGetters({
            CART_ARR: 'cart/CART_ARR',
        }),
        //Поиск по имени
        searchProducts() {
            let productList = this.ware;
            return productList.filter(item => item.name.includes(this.searchWare))
        },
    }
}
</script>

<style lang="scss" scoped>
$font-family: 'Lucida Sans Unicode';
.product-catalog {
    margin: 0 auto;
    max-width: 2200px;
    padding: 0px 30px 30px 30px;
}

.product-catalog__list {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(540px, 1fr));
    grid-gap: 10px;
}

.product-catalog-in__cart {
    position: fixed;
    width: 50px;
    height: 50px;
    top: 50px;
    right: 30px;
    background-image: url(@/assets/svg/cart.svg);
    background-repeat: no-repeat;
    z-index: 5;

    span {
        display: inline-block;
        margin-left: 19px;
        margin-top: 23px;
        font-size: 14px;
        font-weight: 600;
        font-family: $font-family;
        color: rgb(0, 0, 0);
    }
    .span-left {
        margin-left: 15px;
    }
}
.product-catalog__input {
    width: 300px;
	font-size: 18px;
	padding: 10px 0px 10px 10px;
	border: 0.5px solid #cecece;
	background: #F6F6f6;
	border-radius: 5px;
    margin-bottom: 60px;
}
.product-catalog__input::placeholder {
    padding-left: 30px;
    color: #c9c8c8;
}
.product-catalog__input:focus::-webkit-input-placeholder {
    color:transparent;
}
.product-catalog__search {
    display: flex;
    justify-content: end;
}
</style>