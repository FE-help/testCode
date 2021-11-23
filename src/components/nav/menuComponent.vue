<template>
  <div class="menu-box">
    <ul>
      <li v-for="item in menuList" :key="item.value">
        <router-link active-class="fff" exact-active-class="#fff" :to="item.value">{{item.text}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

interface menu {
    text: string
    value: string
}
  export default defineComponent({
      name: 'menuComponent',
      props: {
          menuList: {
              type: Array as PropType<menu>
          }
      },
      data() {
      },
      computed: {
          menuList(){
              console.log(this);
              return this.props.menuList
          }
      }
  })
</script>

<style lang="less">
  .menu-box{
    border: 1px solid #e2a980;
    float: left;
    width: 150px;
    height: 600px;
    ul{
      padding: 20px;
    }
    li{
      display: block;
      line-height: 40px;
    }
  }
</style>
