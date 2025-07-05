<template>
  <div class="working">
    <AppBanner
      v-for="(app, index) in appList"
      :key="index"
      :name="app.name"
      :intro="app.intro"
      @click="showDetail"
    ></AppBanner>
  </div>
</template>

<script setup lang='ts'>
import { ref, onBeforeMount } from 'vue';
import { invoke } from '@tauri-apps/api/core';

import AppBanner from '../share/AppBanner.vue';
import router from '../../router';

// 应用信息列表
// const appList = [
//   {
//     name: "应用程序1",
//     intro: "这是应用程序1"
//   },
//   {
//     name: "应用程序2",
//     intro: "这是应用程序2"
//   },
//   {
//     name: "应用程序3",
//     intro: "这是应用程序3"
//   },
//   {
//     name: "应用程序4",
//     intro: "这是应用程序4"
//   },
//   {
//     name: "应用程序5",
//     intro: "这是应用程序5"
//   },
//   {
//     name: "应用程序6",
//     intro: "这是应用程序6"
//   },
//   {
//     name: "应用程序7",
//     intro: "这是应用程序7"
//   },
//   {
//     name: "应用程序8",
//     intro: "这是应用程序8"
//   },
// ]

// 定义AppInfo类型
interface AppInfo {
  name: string,
  intro: string,
  version: string,
  size: string
}

// 获取应用列表
const appList = ref<AppInfo[]>([])
const fetchAppList = async (category: string) => {
  try {
    const result = await invoke<AppInfo[]>('fetch_by_category', { 
      category: category 
    });
    appList.value = result;
  } catch (error) {
    console.error('Error fetching list:', error);
  }
}

// 跳转到应用详情
const showDetail = () => {
  router.push("/app")
}

// 组件挂载时自动执行
const category = "working"
onBeforeMount(() => {
  fetchAppList(category)
})
</script>

<style scoped>
.working {
  margin-top: 40px;
}
</style>