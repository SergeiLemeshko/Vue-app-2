import { createStore } from 'vuex';
import { reviewModule } from '@/store/reviewModule';
import { cartModule } from '@/store/cartModule';

export default createStore({
    modules: {
      review: reviewModule,
      cart: cartModule
    }
})