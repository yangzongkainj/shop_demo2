<template>
    <div class="up-content">
      <div class="poster">
        <div class="poster-title-up">四季流光，尽收眼底</div>
        <div class="poster-title-down">安同2024年历壁纸</div>
      </div>
      <div class="update">
        <div class="update-title">一切如常！</div>
        <div class="update-status">系统各组件已更新</div>
        <div class="update-greet">干得漂亮<br>祝您使用愉快</div>
        <div class="update-button">查找更新</div>
      </div>
    </div>
    <div class="down-content">
        <div class="app-content">
            <div class="app-title">装机必备</div>
            <div class="apps">
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
                <AppIntro @click="showDetail"></AppIntro>
            </div>
        </div>
      <div class="tip-content">
        <div class="tip-title">技巧指南</div>
        <div class="tips">
          <TipIntro class="tip-intro"></TipIntro>
          <TipIntro class="tip-intro"></TipIntro>
          <TipIntro class="tip-intro"></TipIntro>
          <TipIntro class="tip-intro"></TipIntro>
          <TipIntro class="tip-intro"></TipIntro>
        </div>
        <div class="tip-button">更多技巧</div>
      </div>
    </div>
</template>

<script setup>
import AppIntro from '../share/AppIntro.vue';
import TipIntro from "../share/TipIntro.vue";
import { useRouter } from 'vue-router';

const router = useRouter()

// 跳转到应用详情
function showDetail() {
    router.push("/detail");
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.up-content {
    display:flex;
    margin-top: 40px;
}

.poster {
    flex-grow: 1;
    height: 200px;
    margin: 20px 10px 10px 20px;
    border-radius: 5px;
    background-color: rgb(0, 32, 74);
}

.update {
    width: 310px;
    height: 160px;
    margin: 20px 20px 10px 10px;
    padding: 20px;
    border-radius: 5px;
    background-color: rgb(206, 255, 214);
}

.poster-title-up {
  padding: 70px 0 0 30px;
  font-size: 30px;
  color: white;
}

.poster-title-down {
  padding-left: 30px;
  font-size: 38px;
  color: white;
}

.update-title {
  font-size: 30px;
}

.update-status {
  margin-top: 8px;
}

.update-greet {
  margin-top: 8px;
  line-height: 1.1;
}

.update-button {
  width: 130px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-top: 3px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  float: right;
}

.update-button:hover {
  background-color: lightgray;
}

.down-content {
    display: flex;
}

.app-content {
    width: calc(100% - 400px);
    height: 400px;
    /* 本组件margin值为AppIntro的进行了预留 */
    margin: 10px 10px 15px 15px;
}

.app-title {
    font-size: 24px;
    line-height: 30px;
    margin-left: 5px;
}

.apps {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
}

.apps div {
    margin: 5px;
}

.tip-content {
  width: 350px;
  height: 485px;
  margin: 10px 20px 20px 10px;
  border-radius: 5px;
}

.tip-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.tip-button {
  width: 130px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  float: right;
}

.tip-button:hover {
  background-color: lightgray;
}
</style>