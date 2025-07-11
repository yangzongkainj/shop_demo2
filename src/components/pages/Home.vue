<template>
  <!-- 上部组件 -->
  <div class="up-content">
    <Welcome class="welcome"></Welcome>
    <!-- 没有需要升级的软件 -->
    <div v-if="update == 0 && updateSecurity == 0">
      <UpdateGreen class="update"></UpdateGreen>
    </div>
    <!-- 存在需要升级的软件，但没有安全更新 -->
    <div v-else-if="update > 0 && updateSecurity == 0">
      <UpdateYellow 
        class="update"
        :update="update"
      ></UpdateYellow>
    </div>
    <!-- 存在安全更新 -->
    <div v-else>
      <UpdateRed 
        class="update"
        :update="update"
        :updateSecurity="updateSecurity"
      ></UpdateRed>
    </div>
  </div>
  <!-- 下部组件 -->
  <div class="down-content">
    <div class="app-content">
      <div class="app-title">{{ $t("home.appTitle") }}</div>
      <div class="apps">
        <AppCard
          v-for="(app, index) in recommandList"
          :key="index"
          :name="app.name"
          :intro="app.intro"
          @click="showDetail"
        ></AppCard>
      </div>
    </div>
    <div class="tip-content">
      <div class="tip-title">{{ $t("home.tipTitle") }}</div>
      <div class="tips">
        <TipCard
          v-for="(tip, index) in tipList"
          :key="index"
          :month="tip.month"
          :day="tip.day"
          :title="tip.title"
          :intro="tip.intro"
        ></TipCard>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onBeforeMount } from 'vue';
import { invoke } from '@tauri-apps/api/core';

import Welcome from '../share/Welcome.vue';
import UpdateGreen from '../share/UpdateGreen.vue';
import UpdateYellow from '../share/UpdateYellow.vue';
import UpdateRed from '../share/UpdateRed.vue';
import AppCard from '../share/AppCard.vue';
import TipCard from '../share/TipCard.vue';
import router from '../../router';

// 总升级与安全升级数
let update = ref(10)
let updateSecurity = ref(0)

// 技巧指南列表
const tipList = [
  {
    month: "四月",
    day: 23,
    title: "龙架构如何运行 x86 程序？",
    intro: "LATX 安装及使用指南"
  },
  {
    month: "三月",
    day: 17,
    title: "开机时间为何漫长？",
    intro: "手把手教您分析和调整系统服务配置"
  },
  {
    month: "二月",
    day: 22,
    title: "Windows 时间错乱？",
    intro: "调整时间配置，轻松同步双系统配置"
  },
  {
    month: "二月",
    day: 7,
    title: "应用无法安装？",
    intro: "安同维护者来帮您！"
  },
]

// 定义AppInfo类型
interface AppInfo {
  name: string,
  intro: string
}

// 获取推荐列表
const recommandList = ref<AppInfo[]>([])
const fetchRecommandList = async () => {
  try {
    const result = await invoke<AppInfo[]>('fetch_recommand');
    recommandList.value = result;
  } catch (error) {
    console.error('Error fetching list:', error);
  }
}

// 跳转到应用详情
const showDetail = () => {
  router.push("/app")
}

// 组件挂载时自动执行
onBeforeMount(() => {
  fetchRecommandList()
})
</script>

<style scoped>
.up-content {
  display:flex;
  margin-top: 40px;
}

.welcome {
  flex-grow: 1;
  height: 200px;
  margin: 20px;
}

.update {
  width: 300px;
  height: 200px;
  margin: 20px 20px 20px 0;
}

.down-content {
  display: flex;
}

.app-content {
  flex-grow: 1;
  margin: 0 20px 20px 20px;
}

.app-title {
  font-size: 26px;
  margin: 0 0 5px 5px;
  font-weight: 500;
}

.apps {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
}

.tip-content {
  width: 300px;
  height: 300px;
  margin: 0 20px 20px 0;
  flex-shrink: 0;
}

.tip-title {
  font-size: 26px;
  margin: 0 0 5px 5px;
  font-weight: 500;
}
</style>