import { createStore } from 'vuex';
import { reviewModule } from '@/store/reviewModule';
import { cartModule } from '@/store/cartModule';
import { sliderModule } from '@/store/sliderModule';


export default createStore({
    modules: {
      review: reviewModule,
      cart: cartModule,
      slider: sliderModule
    }
})