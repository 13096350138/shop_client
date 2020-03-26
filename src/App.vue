<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './conponents/FooterGuide/FooterGuide.vue'
export default {
  /*调用actions里的方法，发送请求 */
  mounted(){
    //this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  /*调用actions里的方法，发送请求 */
  /*读取state */
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  /*读取state */
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
