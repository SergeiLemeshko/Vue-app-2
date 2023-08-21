export const cartModule = {
    state: () => ({
        cart_arr: []
    }),
    getters: {
        CART_ARR(state) {
            return state.cart_arr;
        }
    },
    mutations: {
        SET_CART: (state, ware) => {
            // увеличиваю кол-во одинаковых товаров(ware) в корзине
            if(state.cart_arr.length) {
                let isWare = false;
                state.cart_arr.map(function (item) {
                    if(item.article === ware.article) {
                        isWare = true;
                        item.sum++
                    }
                })
                if(!isWare) {
                    state.cart_arr.push(ware);
                } 
            } else {
                state.cart_arr.push(ware);
            }
        },
        DEL_FROM_CART: (state, index) => {
            state.cart_arr.splice(index, 1);
        },
        INCREMENT: (state, index) => {
            state.cart_arr[index].sum++
        },
        DECREMENT: (state, index) => {
            if(state.cart_arr.length > 1) {
                state.cart_arr[index].sum--
            }
        }
    },
    actions: {
        ADD_IN_CART({commit}, ware) {
            commit("SET_CART", ware)
        },
        DEL_FROM_CART({commit}, index) {
            commit("DEL_FROM_CART", index)
        },
        INCR_CART_ELEM({commit}, index) {
            commit("INCREMENT", index)
        },
        DECR_CART_ELEM({commit}, index) {
            commit("DECREMENT", index)
        }
    },
    namespaced: true
}
