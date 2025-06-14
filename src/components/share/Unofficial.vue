<template>
  <div class="unofficial">
    <img src="../../assets/icons/unofficial.png" alt="非官方">
    <div class="info">
      <div class="title">已验证可用性</div>
      <div>本软件已过安同 OS 维护者测试验证，功能基本完美</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.unofficial {
  display: flex;
  width: 500px;
  height: 100px;
  border-radius: 5px;
  background-color: lightgray;
}

.title {
  margin-top: 17px;
  font-size: 24px;
}

img {
  width: 60px;
  height: 60px;
  margin: 20px;
}
</style>