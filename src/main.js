import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import Swiper from 'swiper'
// import 'swiper/css'
// import VueCarousel from 'vue-carousel'
// import { slider, slideritem } from 'vue-concise-slider'
// import sliderbasic from './slider_basic'

// createApp.use(Vuex)
// createApp(App).use(VueCarousel);

createApp(App).use(store).mount('#app')
