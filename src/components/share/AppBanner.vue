<template>
  <div class="banner">
    <img src="../../assets/icons/aosc_logo.png" alt="安同社区的logo">
    <div>
      <div class="name">{{ name }}</div>
      <div class="intro">{{ intro }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
// 接收参数
const props = defineProps<{
  name: string,
  intro: string,
}>()
</script>

<style scoped>
.banner {
  display: flex;
  width: 100%;
  height: 72px;
  background-color: rgb(231, 231, 231);
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-left: 2px solid rgb(231, 231, 231);
  border-right: 2px solid rgb(231, 231, 231);
}

.banner:hover {
  border: 2px solid black;
}

img {
  width: 52px;
  height: 52px;
  margin: 10px;
}

.name {
    margin-top: 10px;
    font-size: 20px;
}

.intro {
    margin-top: 4px;
    font-size: 14px;
}
</style>