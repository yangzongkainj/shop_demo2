<template>
  <div>
    <div class="up-content">
      <div class="update-center">
        <div class="title">{{ $t("updates.title") }}</div>
        <div class="intro">{{ $t("updates.intro") }}</div>
        <div class="status">{{ updateSystem }}{{ $t("updates.status1") }}{{ updateApp }}{{ $t("updates.status2") }}</div>
      </div>
      <div class="download"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

// 系统升级与应用升级数
let updateSystem = ref(10)
let updateApp = ref(0)
</script>

<style scoped>
.up-content {
  display: flex;
  margin-top: 40px;
}

.update-center {
  flex-grow: 1;
  height: 200px;
  margin: 20px;
  border-radius: 5px;
  background-color: rgb(231, 231, 231);
}

.title {
  margin-top: 30px;
  margin-left: 50px;
  font-size: 36px;
  font-weight: 700;
}

.intro {
  margin-top: 5px;
  margin-left: 50px;
  font-size: 20px;
}

.status {
  margin-top: 5px;
  margin-left: 50px;
  font-size: 20px;
}

.download {
  width: 300px;
  height: 200px;
  margin: 20px 20px 20px 0;
  border-radius: 5px;
  background-color: rgb(206, 233, 255);
}
</style>