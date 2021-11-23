<template>
  <div class="box">
    <menuComponent :menuList="menulist"></menuComponent>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
    import menuComponent from '/src/components/nav/menuComponent.vue'
    let menulist = [
        {text: 'page b1', value: '/B/b1'},
        {text: 'page b2', value: '/B/b2'},
    ]
</script>

<style lang="less" scoped>
  .box{
    display: block;
    overflow: hidden;
    height: 610px;
    .content{
      width: calc(100% - 200px);
      height: 600px;
      float: left;
      margin-left: 48px;
      border: 1px solid #e23b52;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
    }
  }
</style>
