<template>
  <div class="green">
    <div class="title">{{ $t("updateGreen.title") }}</div>
    <div class="status">{{ $t("updateGreen.status") }}</div>
    <div class="greeting">{{ $t("updateGreen.greeting") }}</div>
    <div class="button">{{ $t("updateGreen.button") }}</div>
  </div>
</template>

<script setup lang='ts'></script>

<style scoped>
.green {
  display: flex;
  flex-direction: column;
  background-color: rgb(206, 255, 214);
  border-radius: 5px;
}

.title {
  padding: 15px 0 0 15px;
  font-size: 26px;
  font-weight: 700;
}

.status {
  padding: 5px 0 0 15px;
}

.greeting {
  padding: 5px 0 0 15px;
}

.button {
  margin: auto 15px 15px auto;
  width: 120px;
  height: 35px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  line-height: 35px;
}
</style>