<template>
  <header>
      <router-link 
      class="icon-go"
      :to="{name:'首页'}"
      v-if="$route.matched[0].path=='/category'">
      </router-link>
      <span class="icon-go" @click="$router.go(-1)" v-else></span>
      <slot name="title"></slot>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/index/style.css';
header{
  background-color: #F8FCFF;
  text-align: center;
  position: relative;
  height: 12vw;
  display: flex;
  // align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。
  align-items: center;
  // 项目位于各行之间留有空白的容器内。
  justify-content: space-between;
  padding: 0 4vw;
  h1{
    font-size: 18px;
    // 规定字符间距
    letter-spacing: .2vw;
    font-weight: 600;
    margin-right: 36vw;
  }
  span,a{
    // 行内块元素。（CSS2.1 新增的值）
    display: inline-block;
    font-size: 20px;
    // transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。
    transform: rotate(-180deg);
    &::before{
      color: #333;
    }
  }
}
</style>

