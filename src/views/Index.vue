<template>
    <div class="index">
        <v-header></v-header>
        <v-swiper></v-swiper>
        <v-service></v-service>
        <v-section1></v-section1>
        <v-section2></v-section2>
        <v-section3></v-section3>
        <v-section4></v-section4>
        <v-baseline></v-baseline>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Header from '../components/index/Header.vue'

import Swiper from '../components/index/Swiper.vue'

import Footer from '../common/_footer.vue'

import Service from '../components/index/service.vue'

import Section1 from '../components/index/section1'

import Section2 from '../components/index/section2'

import Section3 from '../components/index/section3'

import Section4 from '../components/index/section4'

import Baseline from '../common/_baseline'
export default {
    components: {
        'v-header': Header,
        'v-swiper': Swiper,
        'v-footer': Footer,
        'v-service': Service,
        'v-section1': Section1,
        'v-section2': Section2,
        'v-section3': Section3,
        'v-section4': Section4,
        'v-baseline': Baseline,
    }
}
</script>

<style lang="scss" scoped>
.index {
    width: 100%;
}
</style>



