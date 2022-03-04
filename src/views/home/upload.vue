<template>
  <div id="upload-container">
    <input
      type="file"
      id="fileUpload"
      class="fileUpload"
      @change="selectFile"
    />
    <div class="uploadButton" @click="clickUpload">
      <div class="progress" v-if="selectFileName">
        <div class="success" v-if="uploadProgress === 100">
          随便放个啥成功的标识
        </div>
        <el-progress
          show-text="false"
          width="100"
          type="circle"
          :percentage="progress"
        />
      </div>
      <span v-else>+</span>
    </div>
    <div class="fileName" v-if="selectFileName">{{ selectFileName }}</div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Upload',
  data() {
    return {
      uploading: false,
      selectFileName: '',
      uploadProgress: 0,
      timer: null,
    };
  },
  computed: {
    progress() {
      return this.uploadProgress.toFixed(2);
    },
  },
  methods: {
    clickUpload(e) {
      document.querySelector('#fileUpload').click();
    },
    selectFile(e) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      this.selectFileName = file.name;
      this.uploadProgress = 0;
      this.timer = setInterval(() => {
        this.uploadProgress += 1;
        if (this.uploadProgress >= 100) {
          this.uploadProgress = 100;
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 100);
    },
  },
});
</script>

<style lang="less" scoped>
#upload-container {
  text-align: left;
}
.fileUpload {
  visibility: hidden;
}
.uploadButton {
  border: 1px solid #e2e2e2;
  width: 100px;
  height: 100px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  span {
    font-size: 20px;
    line-height: 100px;
    display: inline-block;
  }
  position: relative;
  .progress {
    position: absolute;
    left: 0;
    top: 0;
    .success {
      width: 100px;
      height: 100px;
      background: rgba(26, 94, 79, 0.411);
      position: absolute;
      color: #eee;
    }
  }
}
.fileName {
  font-size: 13px;
  line-height: 14px;
  display: inline-block;
}
</style>
