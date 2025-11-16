<template>
    <div class="background">
        <div>
            <router-link  to="/" class="style">>>返回上一页<<</router-link>
        </div>
        <registercore />
    </div>
</template>


<script setup>
import registercore from './consist/registercore.vue';

</script>
<style>
html,
body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>

<style scoped>
.background {
    background-image: url('@/material/background.png');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.style {
    position: absolute;
    padding-top: 20px;
    padding-left: 1250px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 20px;
    font-weight: bolder;
    font-family: "微软雅黑";
}
.style:hover {
  color: pink;
}
</style>