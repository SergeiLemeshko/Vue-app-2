export const sliderModule = {
    state: () => ({
        // массив картинок слайдера
        sliderItems: [
            {id: 1, name: 'img1', img: '1.jpg'},
            {id: 2, name: 'img2', img: '2.jpg'}, 
            {id: 3, name: 'img3', img: '3.jpg'},
            {id: 4, name: 'img4', img: '4.jpg'},
            {id: 5, name: 'img5', img: '5.jpg'}
        ],              
        currentSlideIndex: 0 // устанавливаю индекс слайдера
    }),
    getters: {
        SLIDER_ITEMS(state) {
            return state.sliderItems;
        }
    },
    mutations: {
        NEXT_SLIDE(state) {
            if(state.currentSlideIndex >= state.sliderItems.length - 1) {
                console.log("---")
                state.currentSlideIndex = 0;
            } else {
                state.currentSlideIndex++
                console.log("+++")
            }
        }
    },
    namespaced: true
}
