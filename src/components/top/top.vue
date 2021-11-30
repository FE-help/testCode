<template>
  <div class="top-nav">
    <navMenu></navMenu>
    <div class="fff path">/{{currentRoute}}</div>
    <div class="fff title">主题</div>
    <div class="fff user">用户</div>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import navMenu from '/src/components/nav/navMenu.vue'
    export default defineComponent({
        name: 'top',
        components: { navMenu },
        data() {
            return {
                currentRoute: this.$router.currentRoute.value.name
            }
        },
        watch:{
            $route(){
                this.currentRoute = this.$router.currentRoute.value.name
            }
        },
    })
</script>
<!--<script lang="ts" setup>-->
    <!--import navMenu from '/src/components/nav/navMenu.vue'-->
<!--</script>-->

<style scoped lang="less">
  .fff{
    color: #ff505c;
  }
  .main{
    height:100vh;
    width:100%;
    border:1px solid #00ea69;
  }
  // 顶导航栏
  .top-nav{
    height:60px;
    display: flex;
    line-height:60px;
    text-align: center;
    .path{
      width: 100px;
    }
    .title{
      flex: 1;
    }
    .user{
      width: 100px;
    }
  }
</style>

