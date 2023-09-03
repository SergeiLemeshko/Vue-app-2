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
        <input v-model="searchWare"/>
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
                    name: "Туфли мужские BNAW23-50",
                    price: 2100,
                    id: "1",
                    article: "F8G",
                    img: "1.jpg",
                    available: true
                },
                {
                    name: "Туфли мужские BVNW23-20",
                    price: 3150,
                    id: "2",
                    article: "NB7",
                    img: "2.jpg",
                    available: true
                },
                {
                    name: "Туфли мужские VBAJ33-00",
                    price: 4200,
                    id: "3",
                    article: "2BM",
                    img: "3.jpg",
                    available: false
                },
                {
                    name: "Туфли мужские GSLE44-07",
                    price: 5300,
                    id: "4",
                    article: "HL4",
                    img: "4.jpg",
                    available: true
                },
                {
                    name: "Туфли мужские M54HJD-73",
                    price: 6500,
                    id: "5",
                    article: "3BN",
                    img: "5.jpg",
                    available: false
                },
                {
                    name: "Туфли мужские BNAW23-V0",
                    price: 8700,
                    id: "6",
                    article: "CS9",
                    img: "6.jpg",
                    available: true
                },
                {
                    name: "Туфли мужские 25BDGF-84",
                    price: 2100,
                    id: "7",
                    article: "ML4",
                    img: "7.jpg",
                    available: true
                },
                {
                    name: "Туфли мужские BGD75D-BV",
                    price: 3150,
                    id: "8",
                    article: "FZ5",
                    img: "8.jpg",
                    available: true
                },
                {
                    name: "Туфли мужские BCPP7R-56",
                    price: 4200,
                    id: "9",
                    article: "3VV",
                    img: "9.jpg",
                    available: false
                },
                {
                    name: "Туфли мужские 45BNNB-22",
                    price: 5300,
                    id: "10",
                    article: "B89",
                    img: "10.jpg",
                    available: true
                },
                {
                    name: "Туфли мужские XXNM55-11",
                    price: 6500,
                    id: "11",
                    article: "DC6",
                    img: "11.jpg",
                    available: false
                },
                {
                    name: "Туфли мужские CRTY33-90",
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
            this.ADD_IN_CART(data)
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
        // Смещение двузначного числа на корзине
        leftCartLength() {
            if(this.$refs.cartlength.innerText >= 3){
                return this.$refs.cartlength.classList.add("span-left")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.product-catalog {
    position: absolute;
    max-width: 1000px;
    top: 700px;
}

.product-catalog__list {
    display: grid;
    grid-template: 1fr 1fr 1fr/1fr 1fr 1fr;
    gap: 90px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
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
        font-weight: 500;
        color: rgb(0, 0, 0);
    }

    .span-left {
        margin-left: 16px;
    }
}
</style>