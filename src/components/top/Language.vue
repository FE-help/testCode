<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link cursor-pointer">
      {{$t('language')}}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="local in locales" @click="changeLanguage(local.value)" :key="local">
          {{local.label}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
    import cookie from 'js-cookie'
    import locales from '../../constant/locales'

    const changeLanguage = (value: string): void => {
        cookie.set('language', value || 'en');
        location.reload();
    };
</script>

<style scoped>

</style>
