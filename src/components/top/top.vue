<template>
  <div class="top-nav">
    <navMenu></navMenu>
    <div class="fff path">/{{currentRoute}}</div>
    <div class="fff title">主题</div>
    <div class="fff user" v-for="local in locales"
         @click="changeLanguage(local.value)"
         :key="local">{{local.label}}
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import navMenu from '/src/components/nav/navMenu.vue'
    import cookie from 'js-cookie'
    import locales from '../../constant/locales'

    export default defineComponent({
        name: 'top',
        components: {navMenu},
        data() {
            return {
                currentRoute: this.$router.currentRoute.value.name
            }
        },
        watch: {
            $route() {
                this.currentRoute = this.$router.currentRoute.value.name
            }
        },
        methods: {
            changeLanguage: (value: string) => {
                cookie.set('language', value || 'en');
                location.reload();
            }
        },
        setup() {
            return {
                locales
            }
        }
    })
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
  }
</style>

