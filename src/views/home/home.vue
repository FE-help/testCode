<template>
  <div id="home">
    {{$t('message')}}
    Home
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>
  #home{
    padding: 60px;
    text-align: center;
  }
</style>
