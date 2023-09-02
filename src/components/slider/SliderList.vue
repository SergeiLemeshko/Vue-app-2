<template>
    <div class="wrapper-slider">
        <div class="slider-list" :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"> 
            <slider-item 
                v-for="item in SLIDER_ITEMS"
                :key="item.id"
                :SliderItem="item"
            />
        </div>
    </div>
</template>

<script>
import SliderItem from '@/components/slider/SliderItem.vue';
import { mapGetters, mapState, mapMutations} from "vuex";

export default {
    name: "slider-list",
    components: {
        SliderItem
    },
    props: {
        // интервал для проигрывания слайдера
        interval: {
            type: Number,
            default: 0
        }
    },
    computed: {
        ...mapState({
			currentSlideIndex: state => state.slider.currentSlideIndex,
		}),
        ...mapGetters({
            SLIDER_ITEMS: 'slider/SLIDER_ITEMS',		
		}),
    },
    methods: {
        ...mapMutations({
			NEXT_SLIDE: 'slider/NEXT_SLIDE'
		}),
    },
    mounted() {
        if(this.interval > 0) {
            // определяю контекст, чтобы в SetInterval можно было вызвать nextSlide()
            let vm = this;
            setInterval(function () {
                vm.NEXT_SLIDE()
            }, vm.interval)
        } 
    }
}
</script>

<style lang="scss" scoped>
.wrapper-slider {
    max-width: 700px;
    overflow: hidden;
    margin: 0 auto;
}

.slider-list {
    margin-top: 180px;
    display: flex;
    transition: all ease .5s;
}
</style>