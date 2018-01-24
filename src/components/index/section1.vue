<template>
    <section class="section1">
        <h6 class="section1-title">
            section1
            <i class="icon-right"></i>
        </h6>
        <ul class="section1-list">
            <li>
                <img src="../../imgs/love_01.png" alt="">
            </li>
             <li>
                <img src="../../imgs/love_01.png" alt="">
            </li>
             <li>
                <img src="../../imgs/love_01.png" alt="">
            </li>
             <li>
                <img src="../../imgs/love_01.png" alt="">
            </li>
        </ul>
        <router-link :to="{ name: '详情页'}" >
    <div class="banner">section1-banner</div>
  </router-link>
    </section>
</template>

<script>
import { Lazyload } from 'mint-ui';

export default {
    // props:['section1']
}

</script>

<style lang="scss" scoped>
@import '../../assets/index/style.css';
.section1-title {
    background-color: #f0f0f0;
    text-align: center;
    padding: 4vw 0;
    color: #333;
    position: relative;
    i{
        position: absolute;
        right: 2vw;
        // top: 50%;
        margin-top: 0px;
        // font-size: 36px;
    }
}
.section1-list {
    display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      padding:0 2vw 4vw 2vw;
      li{
          width: 50%;
        padding:1vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        img{
            width: 100%;
          display: block;
        }
      }
}

.banner{
    width: 100%;
    height: 12vh;
    text-align: center;
    display: flex;
    flex-direction:column-reverse;
    justify-content:center;
    background-color: yellowgreen;
}

</style>

