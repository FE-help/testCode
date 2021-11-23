<template>
  <top></top>
  <div id="content">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
    import top from '/src/components/top/top.vue'
</script>
<style lang="less" scoped>
  #content{
    width: 100%;
    min-height: 600px;
  }
</style>
