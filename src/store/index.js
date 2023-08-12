import { createStore } from 'vuex';
import { reviewModule } from '@/store/reviewModule';


export default createStore({
    modules: {
      review: reviewModule,
    }
})