<template>
  <div>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="#fff"
            background-color="#00f"
            active-text-color="#fff"
    >
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">
          <router-link active-class="fff" exact-active-class="#fff" to="/home">go to home</router-link>
        </el-menu-item>
        <el-menu-item index="2-1">
          <router-link active-class="fff" exact-active-class="#fff" to="/A">go to A page</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link active-class="fff" exact-active-class="#fff" to="/B">go to B page</router-link>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
    import {defineComponent, ref} from "vue";

    const activeIndex = ref("1");
    const activeIndex2 = ref("1");
    const handleSelect = (key: any, keyPath: any) => {
        console.log(key, keyPath);
    };
</script>

<style scoped lang="less">
  .fff {
    color: #ff445e !important;
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
  a{
    color: #fffafe
  }
</style>

<style lang="less">
  // 去除选中后下边框
  ul.el-menu-demo.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
    border: none;
  }

</style>
