<template>
  <div class="top-nav">
    <navMenu></navMenu>
    <div class="hide">{{$router.currentRoute}}</div>
    <!--<div>{{JSON.stringify($router.currentRoute)}}</div>-->
    <div class="fff">我是当前路由：{{$router.currentRoute._rawValue.name}}</div>
    <div class="fff">我是首页</div>
    <div class="fff">我是右边栏</div>
  </div>
</template>

<script setup lang="ts">
    import navMenu from '/src/components/nav/navMenu.vue'
  let routerInfo = 'a';
</script>

<style scoped lang="less">
  .fff{
    color: #ff505c;
  }
  .hide{
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  .main{
    height:100vh;
    width:100%;
    border:1px solid #00ea69;
  }
  // 顶导航栏
  .top-nav{
    height:60px;
    border:1px solid #021329;
    display: flex;
    justify-content: space-between;
    line-height:60px;
  }
</style>

