import axios from "axios"

export const reviewModule = {
    state: () => ({
        reviews: []
    }),
    getters: {
        REVIEWS(state) {
            return state.reviews;
        }
    },
    mutations: {
        SET_REVIEWS: (state, reviews) => {
            state.reviews = reviews;
        }
    },
    actions: {
        async GET_REVIEWS({ commit }) {
            return await axios('https://jsonplaceholder.typicode.com/posts?_limit=20', {
                method: "GET"
            })
            .then((reviews) => {
                commit("SET_REVIEWS", reviews.data);
                return reviews;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        }
    },
    namespaced: true
}
