<template>
  <div>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="#fff"
            background-color="#ff445e"
            active-text-color="#83ff86"
            menu-trigger="click"
    >
      <el-sub-menu index="2" popper-class="menu-box1">
        <template #title>Workspace</template>
        <el-menu-item v-for="(menu, index) in menuList" :index="index+''">
          <router-link active-class="fff" :to="menu.path">{{menu.title}}</router-link>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
    import {defineComponent, ref} from "vue";
    import { menuList } from "../../constant/menu";

    const activeIndex = ref('1');
    const handleSelect = () => {}
</script>

<style scoped lang="less">
  .fff {
    color: #1ee205 !important;
  }
  .el-menu--horizontal {
    width: 150px;
    margin: 0;
    border: none;

    > li {
      width: 0;
      height: 100%;
    }
  }
</style>

<style lang="less">
  // 去除选中后下边框
  ul.el-menu-demo.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
    border: none;
  }
  .menu-box1.el-popper{
    top: 61px !important;
    left: 0 !important;
    border: none !important;
    ul{
      background-color: blueviolet;
      .el-menu-item{
        background-color: blueviolet;
        &:hover{
          background-color: #4c6de2;
        }
        a{
          color: coral;
        }
      }
      color: #8c89ff;
    }
  }
</style>
