<template>
     <footer class="footer" @click.stop='gotoRouter'>
       <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页">
      <i slot="icon" class="icon-index"></i>
        首页
    </mt-tab-item>
    <mt-tab-item id="分类页">
      <i slot="icon" class="icon-category"></i>
      分类
    </mt-tab-item>
    <mt-tab-item id="购物车页">
      <i slot="icon" class="icon-car"></i>
      购物车
    </mt-tab-item>
    <mt-tab-item id="用户页">
      <i slot="icon" class="icon-user"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
  <p>
      
  </p>
    </footer>
</template>

<script>
export default {
    methods: {
        gotoRouter() {
            this.$router.push({
                name: this.selected
            })
        }
    },
    data() {
        return {
            //对应mt-tab-item 的id值
            selected: ''
        }
    },
    mounted() {

        //获取当前路由名称，根据该名称给当前footer添加is-selected
        let Rname = this.$route.name;
        switch (Rname) {
            case '首页':
                this.selected = '首页';
                break;
            case '分类页':
                this.selected = '分类页';

                break;
            case '购物车页':
                this.selected = '购物车页';

                break;
            case '用户页':
                this.selected = '用户页';
                break;
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/index/style.css'

</style>

