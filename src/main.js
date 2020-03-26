// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer.js'     //加载mockServer即可
import loading from './conmon/imgs/loading.gif'
import './filters/index.js'    //加载过滤器

//注册全局组件标签
Vue.component(Button.name,Button)    // <mt-button>
Vue.use(VueLazyload,{   // 内部自定义了一个指令lazy
  loading
})

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,    //使用上vue-router
  store      //使用上vuex
})