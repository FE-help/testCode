<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>Links</el-header>
        <el-main v-loading="state.loading">
          <div class="md-file" v-html="state.content"></div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, onMounted } from 'vue'
  import { marked } from 'marked'
  import axios from 'axios'
  const state = reactive({
      content: '',
      loading: false
  });
  const getMdContent = (fileName) => {
      state.loading = true;
      axios.get(`public/docs/${fileName}.md`)
          .then(({ data }) => {
              state.content = marked.parse(data).replace(/<a href/g, '<a target="_blank" href');
              state.loading = false
          })
  };

  onMounted(() => {
      getMdContent('collect');
  })
</script>

<style scoped lang="less">

</style>
