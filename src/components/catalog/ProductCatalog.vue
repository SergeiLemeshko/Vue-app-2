<template>
    <router-link :to="{name: 'cart'}">
        <div class="product-catalog-in__cart">Корзина: {{ CART_ARR.length }}</div>
    </router-link>
    <div class="product-catalog">
        <div class="product-catalog__list">
            <product-item
            v-for="item in ware"
            :key="id"
            :item_ware="item"
            @addInCart="addInCart"
            />
        </div>
    </div>
</template>

<script>
import ProductItem from "@/components/catalog/ProductItem.vue"
import { mapGetters, mapActions} from "vuex"


export default {
    name: "product-catalog",
    components: {
        ProductItem,
    },
    data() {
        return {
            ware: [
                {
                    name: "boot 1",
                    price: 2100,
                    id: "1",
                    article: "F8G",
                    img: "1.jpg",
                    available: true
                },
                {
                    name: "boot 2",
                    price: 3150,
                    id: "2",
                    article: "NB7",
                    img: "2.jpg",
                    available: true
                },
                {
                    name: "boot 3",
                    price: 4200,
                    id: "3",
                    article: "2BM",
                    img: "3.jpg",
                    available: false
                },
                {
                    name: "boot 4",
                    price: 5300,
                    id: "4",
                    article: "HL4",
                    img: "4.jpg",
                    available: true
                },
                {
                    name: "boot 5",
                    price: 6500,
                    id: "5",
                    article: "3BN",
                    img: "5.jpg",
                    available: false
                },
                {
                    name: "boot 6",
                    price: 8700,
                    id: "6",
                    article: "CS9",
                    img: "6.jpg",
                    available: true
                },
                {
                    name: "boot 7",
                    price: 2100,
                    id: "7",
                    article: "ML4",
                    img: "7.jpg",
                    available: true
                },
                {
                    name: "boot 8",
                    price: 3150,
                    id: "8",
                    article: "FZ5",
                    img: "8.jpg",
                    available: true
                },
                {
                    name: "boot 9",
                    price: 4200,
                    id: "9",
                    article: "3VV",
                    img: "9.jpg",
                    available: false
                },
                {
                    name: "boot 10",
                    price: 5300,
                    id: "10",
                    article: "B89",
                    img: "10.jpg",
                    available: true
                },
                {
                    name: "boot 11",
                    price: 6500,
                    id: "11",
                    article: "DC6",
                    img: "11.jpg",
                    available: false
                },
                {
                    name: "boot 12",
                    price: 8700,
                    id: "12",
                    article: "J3G",
                    img: "12.jpg",
                    available: true
                }
            ]
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
        })
    }
}
</script>

<style lang="scss">
    .product-catalog {
        position: absolute;
        max-width: 1000px;
        top: 100px;
    }

    .product-catalog__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .product-catalog-in__cart {
        position: absolute;
        top: 20px;
        right: 25px;
        border: solid 1px rgb(141, 130, 130);
        padding: 10px;
    }
</style>