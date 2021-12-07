<template>
  <div class="top-nav">
    <navMenu></navMenu>
    <div class="fff path">{{route.name}}</div>
    <div class="fff title">{{$t('title')}}</div>
    <div class="fff language">
      <Language></Language>
    </div>
  </div>
</template>

<script setup lang="ts">
    import {useRoute} from 'vue-router'
    import navMenu from '/src/components/nav/navMenu.vue'
    import Language from './Language.vue'

    const route = useRoute();
</script>
<style scoped lang="less">
  .fff {
    color: #ff505c;
  }

  .main {
    height: 100vh;
    width: 100%;
    border: 1px solid #00ea69;
  }

  // 顶导航栏
  .top-nav {
    height: 60px;
    display: flex;
    line-height: 60px;
    text-align: center;

    .path {
      width: 100px;
    }

    .title {
      flex: 1;
    }

    .user {
      width: 100px;
    }
    .language{
      width: 150px;
    }
  }
</style>

