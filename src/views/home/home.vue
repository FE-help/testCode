<template>
  <div id="home">
    {{$t('message')}}
    Home

    <TEditor></TEditor>
  
    <div class="mt-20">
      <h3>上传Demo</h3>
      <Upload></Upload>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TEditor from './editor.vue';
import Upload from './upload.vue';

</script>
<style lang="less" scoped>
  #home{
    padding: 60px;
    text-align: center;
  }
  .editor-box{
    margin: 20px 0;
  }
  .mt-20{
    margin-top: 20px
  }
</style>
