import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '@/components/catalog/ProductCatalog.vue'
import Cart from '@/components/cart/Cart.vue'
import ReviewsCatalog from '@/components/reviews/ReviewsCatalog.vue'

const routes = [
	{
		path: '/',
		name: 'catalog',
		component: ProductCatalog
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	},
	{
		path: '/reviews',
		name: 'reviews',
		component: ReviewsCatalog
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router;
