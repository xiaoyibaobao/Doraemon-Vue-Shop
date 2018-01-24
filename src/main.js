// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '../src/vuex/store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

// import api from '../src/https/api.js'


Vue.use(Vuex)

Vue.use(MintUI);


// 导入Mint-UI组件库
import '../src/lib/mui/css/mui.css'
// 导入扩展图标
import '../src/lib/mui/css/icons-extra.css'
Vue.config.productionTip = false

// Vue.prototype.$api = api;

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
      if (store.state.login.token) {  // 通过vuex state获取当前的token是否存在
        next();
      }
      else {    //如果没有权限,重定向到登录页,进行登录
        next({
          path: '/login',
          // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
    else { //不需要权限 直接跳转
      next();
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
