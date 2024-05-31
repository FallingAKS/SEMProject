<script setup lang="ts">
import {ref} from 'vue'
import {ElMessage, ElMessageBox} from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type {UploadProps, UploadUserFile} from 'element-plus'


const progressHandler = (e: any) => {
  console.log(e)
  ElMessage.warning({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const failHandler = (e: any) => {
  console.log(e)
  ElMessage.error({
    message: 'Sorry, this is an error message.',
    type: 'error',
  })
}
const successHandler = (e: any) => {
  console.log(e)
  ElMessage.success({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const exceedHandler = (e: any) => {
  console.log(e)
  ElMessageBox.alert('Sorry, this is an exceed message.', 'Warning', {
    confirmButtonText: 'OK',
  })
}


const submitUpload = () => {
  console.log('submitUpload')
}

</script>

<template>
  <div id="content">
    <div id="upLoaderContainer">
      <el-upload
          class="avatar-uploader"
          drag
          :show-file-list="true"
          :on-progress="progressHandler"
          :on-error="failHandler"
          :on-success="successHandler"
          :on-exceed="exceedHandler"
          accept="txt"
          :auto-upload="false"
          :limit="1"
          action="#"
      >
        <template #trigger>
          <el-icon class="avatar-uploader-icon">
            <Plus/>
          </el-icon>
        </template>
        <el-button class="ml-3" type="success" @click="submitUpload">
          上传文件
        </el-button>
        <template #tip>
          <div class="el-upload__tip">
            仅支持txt文件
          </div>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  justify-content: center;
}

#upLoaderContainer {
  display: flex;
  flex-direction: column;

  margin: auto 0;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 48px;
  color: #8c939d;
  width: 378px;
  height: 378px;
  text-align: center;
}
</style>