<template>
    <main class="project-details center">
        <section class="project-details__intro">
            <img src="../assets/project-details-intro.png" alt="photo">
        </section>
        <section class="project-details__content center">
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
        </section>
        <section class="slider center">
            <div class="slider__content">
                <div class="slider-wrapper">
                    <SliderImage :image="image" v-for="image in sliderImages" :id="image.id" :key="image.id"
                        :src="image.src" alt="bedroom" />
                    <SliderImage :image="image" v-for="image in sliderImages" :id="image.id" :key="image.id"
                        :src="image.src" alt="bedroom" />
                </div>
            </div>
            <div @click="changeImage" class="slider-pagination center">
                <SliderPagination class="slider-pagination__button_active" />
                <SliderPagination />
                <SliderPagination />
            </div>
        </section>

        <!-- <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
            </swiper-slide><swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
            </swiper-slide><swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
            </swiper-slide><swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
            </swiper-slide><swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
            </swiper-slide><swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </div>
            </swiper-slide><swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </div>
            </swiper-slide><swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </div>
            </swiper-slide><swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </div>
            </swiper-slide>
        </swiper> -->

    </main>
</template>

<script>
import SliderImage from './SliderImage.vue';
import SliderPagination from './SliderPagination.vue'
import { mapState } from 'vuex'
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import 'swiper/css';
// import 'swiper/css/zoom';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './style.css';


// import { Carousel, Slide } from 'vue-carousel';
// import { slider, slideritem } from 'vue-concise-slider' // import slider components

export default {
    name: 'ProjectDetailsMain',
    components: {
        SliderImage,
        SliderPagination,
        // slider,
        // Carousel,
        // Slide
    },

    data() {
        return {
            // pages: [
            //     {
            //         html: 'slider1',
            //         style: {
            //             'background': '#1bbc9b'
            //         }
            //     },
            //     {
            //         html: 'slider2',
            //         style: {
            //             'background': '#4bbfc3'
            //         }
            //     },
            //     {
            //         html: 'slider3',
            //         style: {
            //             'background': '#7baabe'
            //         }
            //     }
            // ],
            // //Sliding configuration [obj]
            // options: {
            //     currentPage: 0,
            //     thresholdDistance: 500,
            //     thresholdTime: 100,
            //     autoplay: 1000,
            //     loop: true,
            //     direction: 'vertical',
            //     loopedSlides: 1,
            //     slidesToScroll: 1,
            //     timingFunction: 'ease',
            //     speed: 300
            // },

            sliderImages: [
                { id: "slider-image_1", src: require("../assets/slider.jpg") },
                { id: "slider-image_2", src: require("../assets/slider2.jpg") },
                { id: "slider-image_3", src: require("../assets/slider3.png") },
            ],
            sliderImages: [
                { id: 1, src: require("../assets/slider.jpg") },
                { id: 2, src: require("../assets/slider2.jpg") },
                { id: 3, src: require("../assets/slider3.png") },
            ],
            sliderCounter: 0,
        };
    },
    methods: {
        changeImage() {
            let sliderCounter = 0;

            const sliderContentWidth = document.querySelector(".slider-wrapper");
            const sliderPagination = document.querySelectorAll(
                ".slider-pagination__button-wrapper"
                // ".slider-pagination__button_active"
            );
            function slideChange() {
                sliderContentWidth.style.transform = `translateX(${-sliderCounter * 1226}px)`;
            }

            function changePaginationColor(position) {
                if (document.querySelector(".slider-pagination__button_active") !== null) {
                    document
                        .querySelector(".slider-pagination__button_active")
                        .classList.remove("slider-pagination__button_active");
                }
                sliderPagination[position].firstElementChild.classList.add(
                    "slider-pagination__button_active"
                );
            }
            sliderPagination.forEach((circle, position) => {
                circle.addEventListener("click", () => {
                    sliderCounter = position;
                    slideChange();
                    changePaginationColor(sliderCounter);
                });
            });
        },
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
        justify-content: center;
    }

    &__info {
        padding-top: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 658px;

        // &-wrap {
        //     max-width: 658px;
        // }


        &__heading {
            color: #292f36;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }

        &__text {
            color: #4d5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.18px;
            margin-bottom: 36px;
        }
    }
}

.slider {
    &__content {
        max-width: 1201px;
        overflow: hidden;
    }

    &-item {
        margin-top: 61px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    // &-wrapper {
    //     display: flex;
    //     flex-direction: row;
    //     gap: 25px;
    //     transition: all 1s;
    // }

    &-pagination {
        display: flex;
        flex-direction: row;
        gap: 15px;
        justify-content: center;
        padding-top: 15px;
        padding-bottom: 170px;
        cursor: pointer;
    }
}

.slider-image__zoom[data-v-81200830]:hover [data-v-388cd5fa] {
    transform: scale(1.1);
}
</style>