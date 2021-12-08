<template>
  <div class="top-nav">
    <navMenu></navMenu>
    <div class="basic-title-color path">{{route.name}}</div>
    <div class="basic-title-color title">{{$t('title')}}</div>
    <div class="basic-text-color language">
      <Language></Language>
    </div>
  </div>
</template>

<script setup lang="ts">
    import {useRoute} from 'vue-router'
    import navMenu from './navMenu.vue'
    import Language from './Language.vue'

    const route = useRoute();
</script>
<style scoped lang="less">
  @import "/src/style/basic";
  // 顶导航栏
  .top-nav {
    height: 60px;
    display: flex;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid @basicBorderColor;

    .path {
      width: 100px;
    }

    .title {
      flex: 1;
    }

    .user {
      width: 100px;
    }

    .language {
      width: 150px;
    }
  }
</style>

