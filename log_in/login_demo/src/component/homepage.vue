<template>
  <div class="home">
    <h1>欢迎来到星河鲜花店，{{ userStore.username }}</h1>
    <p v-if="!userStore.username">请先登录~</p>
  </div>
</template>

<script setup>

import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

h1 {
  color: palevioletred;
  font-size: 30px;
}
</style>