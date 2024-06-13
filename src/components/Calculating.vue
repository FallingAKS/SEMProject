<template>
  <el-table v-loading="loading" style="width: 100%; height: 100%"
            element-loading-text="数据计算中，请稍后...">
    <el-table-column/>
  </el-table>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import axios from '~/Axios/request';
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const router = useRouter()

const loading = ref(true)

const currentPath = window.location.pathname;
const batchID = currentPath.split('/')[2];

onMounted(async () => {
  try {
    // 让后端处理数据
    let response = await axios.post('/evalu/entropy?batch=' + batchID)
    if (response.data.code != 200) {
      ElMessage.error(response.data.message + '，错误码：' + response.data.code)
      setTimeout(() => {
        router.push('/main')
      }, 2000)
    }
    response = await axios.post('/evalu/roughset?batch=' + batchID)
    if (response.data.code != 200) {
      ElMessage.error(response.data.message + '，错误码：' + response.data.code)
      setTimeout(() => {
        router.push('/main')
      }, 2000)
    }

    while (true) {
      response = await axios.get('/data/batch_data?batch=' + batchID)
      if (response.data.data[0].eresult != null && response.data.data[0].rresult != null) {
        // 计算完成
        await router.push('/result/' + batchID)
      }
      setTimeout(() => {
      }, 500)
    }

  } catch (err) {
    ElMessage.error(err.data.message + '错误码：' + err.data.code)
    setTimeout(() => {
      router.push('/main')
    }, 2000)
  }
})
</script>

<style>
body {
  margin: 0;
}

</style>