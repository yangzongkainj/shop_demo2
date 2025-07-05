<template>
  <div class="yellow">
    <div class="title">{{ $t("updateYellow.title") }}</div>
    <div class="status">{{ $t("updateYellow.status1") }}{{ update }}{{ $t("updateYellow.status2") }}</div>
    <div class="greeting">{{ $t("updateYellow.greeting") }}</div>
    <div class="button">{{ $t("updateYellow.button") }}</div>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps<{
  update: number
}>()
</script>

<style scoped>
.yellow {
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 239, 206);
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