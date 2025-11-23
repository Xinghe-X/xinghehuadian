<template>
    <div class="style1">
        <h3>欢迎登录星河鲜花店</h3>
        <hr>
        <form class="login-form" method="post" @submit.prevent="handleLogin">
            <div class="form-group">
                <span class="iconfont icon-denglu-copy"></span>
                <input type="text" id="username" v-model="username" placeholder="请输入用户名" required class="style2">
            </div>
            <div class="form-group">
                <span class="iconfont icon-mima"></span>
                <input type="password" id="password" v-model="password" placeholder="请输入密码" required class="style2">
            </div>
            <router-link to="/register">注册账号</router-link>
            <div class="form-group">
                <input type="submit" value="登录" class="btn">
            </div>
        </form>

    </div>

</template>

<script setup>

import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
    const username= ref('');
    const password= ref('');
    /*
    const userStore = useUserStore();
    const router = useRouter();
    const handleLogin = () => {
    
    if (!username.value || !password.value) {
        alert('请输入用户名和密码！');
        return;
    }

    userStore.setUsername(username.value);

    router.push('/homepage');
};*/
</script>
<style scoped>
@import "../../font_mqp684xarug/iconfont.css";

.style1 {
    float: left;
    width: 500px;
    height: 450px;
    border: 3px solid white;
    box-sizing: border-box;
    margin-left: 50px;
    margin-top: 100px;
    background-color: white;
    opacity: 0.95;
}

h3 {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    font-family: "微软雅黑";
}

hr {
    height: 2px;
    background-color: palevioletred;
    width: 80%;
}

.login-form {
    width: 400px;
    height: 250px;
    margin: 20px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-group {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.style2 {
    width: 300px;
    height: 30px;
}

a {
    font-size: small;
    align-self: flex-end;
    margin-right: 50px;
    margin-bottom: 20px;
    color: plum;
}
.btn{
    width: 75px;
    background-color: pink;
}
</style>