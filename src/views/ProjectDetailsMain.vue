<template>
    <main class="project-details center">
        <section class="project-details__intro">
            <img src="../assets/project-details-intro.png" alt="photo">
        </section>
        <section class="project-details__content">
            <div class="project-details__info">
                <div class="project-details__info_heading">
                    {{ heading }}
                </div>
                <div class="project-details__info_text">
                    {{ text1 }}
                </div>
                <br>
                <div class="project-details__info_text">
                    {{ text2 }}
                </div>
            </div>
            <section class="slider center">
                <div class="slider__content">
                    <div class="slider-wrapper">
                        <Slider :images="sliderImages" />
                    </div>
                </div>
                <!-- <img class="slider-image__zoom" src="../assets/zoom-icon.png" alt="zoom-icon" /> -->
            </section>
        </section>

    </main>
</template>

<script>
import Slider from '@/components/Slider.vue';
import { mapState } from 'vuex'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/zoom'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

export default {
    name: 'ProjectDetailsMain',
    components: {
        Slider,
        Swiper,
        SwiperSlide,
    },
    props: {
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },

    data() {
        return {

            sliderImages: [
                { id: "slider-image_1", src: require("../assets/slider.jpg") },
                { id: "slider-image_2", src: require("../assets/slider2.jpg") },
                { id: "slider-image_3", src: require("../assets/slider3.png") },
            ],
            // sliderImages: [
            //     { id: 1, src: require("@/assets/slider.jpg") },
            //     { id: 2, src: require("@/assets/slider2.jpg") },
            //     { id: 3, src: require("@/assets/slider3.png") },
            // ],
            sliderCounter: 0,
        };
    },
    methods: {
    },
    computed: {
        ...mapState(["heading", "text1", "text2"]),
    },
}
</script>

<style scoped lang="scss">
.project-details {

    // &__background {
    //     background-image: url("../assets/backgroud-project-details.jpg");
    //     background-size: cover;
    //     display: flex;
    //     height: 364px;
    // }
    &__content {
        display: grid;
        justify-items: center;
        margin-top: 200px;
        margin-bottom: 100px;

    }

    &__info {
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
        max-width: 658px;

        // &-wrap {
        //     max-width: 658px;
        // }


        &_heading {
            margin-bottom: 11px;
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 62.5px */
            letter-spacing: 1px;
        }

        &_text {
            color: #4d5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
        }
    }
}

.slider {
    &__content {
        width: 1201px;
        height: 799px;
        flex-shrink: 0;

        // max-width: 1201px;
        // overflow: hidden;
        border-radius: 70px;
        transition: 0.5s;

        position: relative;

        // &:hover {
        //     transform: scale(2.2);
        // }
    }

    // &-item {
    //     margin-top: 61px;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }

    &-wrapper {
        display: flex;
        flex-direction: row;
        gap: 25px;
        transition: all 1s;
        // position: relative;
    }

    // &-pagination {
    //     display: flex;
    //     flex-direction: row;
    //     gap: 15px;
    //     justify-content: center;
    //     padding-top: 15px;
    //     padding-bottom: 170px;
    //     cursor: pointer;
    // }
}

.slider-image__zoom {
    position: absolute;
    cursor: pointer;
    transition: 1s;
}

// .slider-image__zoom[data-v-81200830]:hover [data-v-388cd5fa] {
//     transform: scale(1.1);
// }
</style>