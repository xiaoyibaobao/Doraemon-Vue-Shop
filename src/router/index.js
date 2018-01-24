import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Category from '../views/Category.vue'
import Car from '../views/Cat.vue'
import User from '../views/User.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/category',
      name: '分类页',
      component: Category
    },
     {
      path: '/car',
      name: '购物车页',
      component: Car
    },
     {
      path: '/user',
      name: '用户页',
      component: User,
      meta: {
           requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       },
    },
    {
      path: '/detail',
      name: '详情页',
      component: Detail
    },
    {
      path: '/login',
      name: '登录页',
      component: Login
    }
  ]
})

