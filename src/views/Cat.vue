<template>
  <div class="cat">
      这是购物车页
      <v-swiper></v-swiper>
  </div>
  
</template>

<script>
import Swiper from '../components/index/Swiper'
   export default {
        components :{
            'v-swiper': Swiper
        }
    }
</script>
