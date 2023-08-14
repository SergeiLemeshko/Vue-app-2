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
            state.cart_arr.push(ware);
        }
    },
    actions: {
        ADD_IN_CART({commit}, ware) {
            commit("SET_CART", ware)
        }
    },
    namespaced: true
}
