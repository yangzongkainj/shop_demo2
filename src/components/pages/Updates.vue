<template>
  <div class="downloading">
    <div class="subtitle">当前正在下载</div>
  </div>
  <div class="managing">
    <div class="subtitle">管理本地程序</div>
  </div>
  <div class="update">
    <div class="subtitle">有x项更新可用</div>
  </div>
</template>

<script setup></script>

<style scoped>
.downloading {
  width: calc(100% - 40px);
  height: 72px;
  margin: 60px 20px 0 20px;
  border-radius: 5px;
  background-color: lightgray;
}

.subtitle {
  font-size: 28px;
  line-height: 72px;
  margin-left: 20px;
}

.managing {
  width: calc(100% - 40px);
  height: 72px;
  margin: 20px 20px 0 20px;
  border-radius: 5px;
  background-color: lightgray;
}

.update {
  width: calc(100% - 40px);
  height: 72px;
  margin: 20px 20px 0 20px;
  border-radius: 5px;
  background-color: lightgray;
}
</style>