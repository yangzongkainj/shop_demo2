<template>
  <div class="tip-intro">
    <div class="date">
      <div class="day">23</div>
      <div class="month">四月</div>
    </div>
    <div class="article">
      <div class="article-title">龙架构如何运行 x86 程序</div>
      <div class="article-intro">LATX 安装及使用指南</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.tip-intro {
  width: 100%;
  height: 52px;
  display: flex;
  margin: 7px 0;
  padding: 5px 0;
  border-radius: 5px;
}

.tip-intro:hover {
  background-color: lightgray;
}

.date {
  width: 32px;
  height: 52px;
  margin-right: 30px;
}

.day {
  font-size: 28px;
  line-height: 28px;
  text-align: center;
}

.month {
  font-size: 16px;
  line-height: 16px;
  margin-top: 8px;
  text-align: center;
}

.article-title {
  font-size: 20px;
  line-height: 20px;
  margin: 2px 0 10px 0;
}

.article-intro {
  font-size: 14px;
  line-height: 14px;
}
</style>