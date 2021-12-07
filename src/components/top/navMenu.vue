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
