<template>
  <div>
    <el-menu
            :default-active="'1'"
            class="el-menu-nav"
            mode="horizontal"
            active-text-color="#303133"
            menu-trigger="click"
    >
      <el-sub-menu index="1" popper-class="menu-box-nav">
        <template #title>Workspace</template>
        <el-menu-item v-for="(menu, index) in menuList" :index="index+''">
          <router-link active-class="basic-title-color" :to="menu.path">{{menu.title}}</router-link>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
    import {menuList} from "../../constant/menu";
</script>

<style scoped lang="less">
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
  ul.el-menu-nav.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
    border: none;
  }

  .menu-box-nav.el-popper {
    top: 61px !important;
    left: 0 !important;
    border: none !important;

    ul {
      .el-menu-item {
        a {
          color: #303133;
        }
      }
    }
  }
</style>
