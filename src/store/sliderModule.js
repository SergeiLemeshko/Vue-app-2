export const sliderModule = {
    state: () => ({
        // массив картинок слайдера
        sliderItems: [
            {id: 1, name: 'img1', img: '1.jpg'},
            {id: 2, name: 'img2', img: '2.jpg'}, 
            {id: 3, name: 'img3', img: '3.jpg'},
            {id: 4, name: 'img4', img: '4.jpg'},
            {id: 5, name: 'img5', img: '5.jpg'},
            {id: 6, name: 'img6', img: '6.jpg'}
        ],              
        currentSlideIndex: 0, // устанавливаю индекс слайдера
        isHide: false
    }),
    getters: {
        SLIDER_ITEMS(state) {
            return state.sliderItems;
        }
    },
    mutations: {
        NEXT_SLIDE(state) {
            if(state.currentSlideIndex === 5) {
                this.isHide = true
            } 
            if(state.currentSlideIndex === 0) {
                this.isHide = false
            }
            if(this.isHide === false) {
                state.currentSlideIndex++;
            }
            if(this.isHide === true) {
                state.currentSlideIndex--;
            }            
        }
    },
    namespaced: true
}
