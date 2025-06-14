<template>
  <div class="unofficial">
    <img src="../../assets/icons/confirmed.png" alt="已验证">
    <div class="info">
      <div class="title">非官方软件包</div>
      <div>该软件未针对安同 OS 进行适配，功能性可能存在问题</div>
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