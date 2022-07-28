<template>

<div>
<!--  头部-->
  <Header></Header>
<!--  主体-->
  <div style = "display: flex">
<!--    侧边栏-->
    <Aside/>
<!--    内容部分-->
    <router-view style = "flex:1" />
  </div>
</div>
</template>

<style>

</style>

<script>
import Header from "@/components/Header.vue"
import Aside from "@/components/Aside";

export default ({
  components:{
    Header,
    Aside,
  },
  setup() {
    
  },
})
</script>

