<script setup lang="ts">
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  TurnOff,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";

const isCollapse = ref(true)
const activeIndex = ref("main")
const router = useRouter()

function handleOpen(key: string, keyPath: string[]) {
console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const selectHandler = (index: string) => {
  console.log(index)
  if(index === "toggle") {
    isCollapse.value = !isCollapse.value
    return
  }
  activeIndex.value = index;
  router.push(`/${index}`);
}
</script>

<template>
  <div id="container" class="flex h-full w-full">
    <div id="menu">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo h-full"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          @select="selectHandler"
      >
        <el-menu-item index="main">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <template #title>上传文件</template>
        </el-menu-item>
        <el-menu-item index="historye">
          <el-icon>
            <document/>
          </el-icon>
          <template #title>查看熵权法结果</template>
        </el-menu-item>
        <el-menu-item index="historyr">
          <el-icon>
            <document/>
          </el-icon>
          <template #title>查看粗糙集结果</template>
        </el-menu-item>
        <el-menu-item index="toggle">
          <el-icon>
            <TurnOff />
          </el-icon>
          <template #title>收起面板</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div id="content" class="grow">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>