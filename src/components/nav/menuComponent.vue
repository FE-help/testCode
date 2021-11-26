<template>
  <div class="menu-box">
    <ul>
      <li v-for="item in menuList" :key="item.value">
        <router-link active-class="fff" exact-active-class="#fff" :to="item.value">{{item.text}}</router-link>
      </li>
    </ul>
  </div>
</template>
<!--<script setup lang="ts">-->
    <!--import {PropType} from 'vue'-->
    <!--import { Menu } from '../../interface/menu'-->
    <!--const props = defineProps({-->
        <!--menuList: Array as PropType<Menu[]>,-->
        <!--menu: Object as PropType<Menu>,-->
        <!--test: String,-->
        <!--test2: String-->
    <!--});-->
<!--</script>-->
<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { Menu } from '../../interface/menu'
  interface Book {
      title: string
      author: string
      year: number
  }
  export default defineComponent({
      name: 'menuComponent',
      props: {
          menuList: {
              type: Array as PropType<Menu[]>,
              require: true,
          },
          menu: {
              type: Object as PropType<Menu>,
              validator: (menu: Menu) => !!menu.test
          },
          test: {
              type: String
          },
          book: {
              type: Object as PropType<Book>,
              required: true,
              validator: (book: Book) => !!book.title
          },
      }
  })
</script>

<style lang="less">
  .menu-box {
    border: 1px solid #e2a980;
    float: left;
    width: 150px;
    height: 600px;

    ul {
      padding: 20px;
    }

    li {
      display: block;
      line-height: 40px;
    }
  }
</style>
