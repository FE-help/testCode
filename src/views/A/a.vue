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
    let menulist: menuType.Menu[] = [
        {text: 'page a1', value: '/A/a1', test: 111},
        {text: 'page a2', value: '/A/a2', test: 111},
        {text: 'page a3', value: '/A/a2', test: 111},
    ];
</script>

<style lang="less" scoped>
  .box {
    display: block;
    overflow: hidden;
    height: 610px;

    .content {
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
