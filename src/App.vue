<template>
  <!-- 展示区 -->
  <div class="navigate">
    <div @click="goBack" class="go-back"></div>
    <RouterLink to="/home">主页</RouterLink>
    <RouterLink to="/working">办公</RouterLink>
    <RouterLink to="/games">游戏</RouterLink>
    <RouterLink to="/video">影音</RouterLink>
    <RouterLink to="/creating">创作</RouterLink>
    <RouterLink to="/observing">浏览</RouterLink>
    <RouterLink to="/updates">安装与更新</RouterLink>
  </div>
  <!-- 导航区 -->
  <RouterView class="content"></RouterView>
</template>

<script setup>
import {RouterView, RouterLink, useRoute, useRouter} from "vue-router"

const router = useRouter()
const route = useRoute()

// 返回上一步
function goBack() {
  // 如果在主页，则什么都不做
  if (route.name === "Home") {
    return
  }

  // 在别的页面，则返回上一步
  router.back()
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.navigate {
  display: flex;
  width: 100%;
  height: 40px;
  background-color: rgb(0, 53, 5);
  position: fixed;
  top: 0;
  left: 0;
}

.go-back {
  width: 50px;
  height: 40px;
  background-image: url("assets/icons/back.png");
  background-size: auto 60%;
  background-position: center;
  background-repeat: no-repeat;
}

.go-back:hover {
  background-color: rgb(29, 148, 178);
}

.navigate a {
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 18px;
  line-height: 30px;
  margin: 0 5px;
  padding: 0 8px;
  border-top: 5px solid transparent;
}

.navigate a:hover {
  border-bottom: 5px solid rgb(29, 148, 178);
}
</style>