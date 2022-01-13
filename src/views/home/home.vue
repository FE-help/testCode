<template>
  <div id="home">
    {{$t('message')}}
    Home

    <TEditor></TEditor>
    <div class="editor-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TEditor from './editor.vue';

</script>
<style lang="less" scoped>
  #home{
    padding: 60px;
    text-align: center;
  }
  .editor-box{
    margin: 20px 0;
  }
</style>
