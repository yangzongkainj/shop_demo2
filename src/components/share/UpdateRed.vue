<template>
  <div class="red">
    <div class="title">{{ $t("updateRed.title") }}</div>
    <div class="status">{{ $t("updateRed.status1") }}{{ updateSecurity }}{{ $t("updateRed.status2") }}</div>
    <div class="greeting">{{ $t("updateRed.greeting1") }}{{ update }}{{ $t("updateRed.greeting2") }}</div>
    <div class="button">{{ $t("updateRed.button") }}</div>
  </div>
</template>

<script setup lang='ts'>
const props =defineProps<{
  update: number
  updateSecurity: number
}>()
</script>

<style scoped>
.red {
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 217, 206);
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