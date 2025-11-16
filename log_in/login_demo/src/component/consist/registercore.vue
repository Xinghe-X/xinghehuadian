<template>
    <div class="page-container">
        <div class="register-panel">
            <h3>欢迎注册账号</h3>
            <hr>
            <form class="register-form" method="post">
                <div class="form-group">
                    <label for="useremail">请输入您的邮箱:</label>
                    <input type="email" id="useremail" v-model.trim="useremail" placeholder="请输入邮箱账号(如:xxx@qq.com)"
                        required class="form-input">
                </div>
                <div class="form-group">
                    <label for="keyword">请输入验证码:</label>
                    <div style="display: flex; gap: 10px; flex: 1;">
                        <input type="password" id="keyword" v-model.trim="keyword" placeholder="请输入6位验证码" required
                            class="form-input">
                        <button type="button" @click="getCode" :disabled="countDown > 0" class="code-btn">
                            {{ countDown > 0 ? `${countDown}秒后重新获取` : '获取验证码' }}
                        </button>
                    </div>
                </div>
                <div class="form-group">
                    <label for="username">请输入您的用户名:</label>
                    <input type="text" id="username" v-model.trim="username" placeholder="请设置2-10位用户名" required
                        class="form-input">
                </div>
                <div class="form-group">
                    <label for="password">请输入您的密码:</label>
                    <input type="password" id="password" v-model.trim="password" placeholder="请设置6-12位密码" required
                        class="form-input">
                </div>
                <div class="form-submit">
                    <input type="submit" value="注册账号" class="submit-btn">
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue'
import axios from 'axios';
const userStore = useUserStore();
const username = ref('');
const password = ref('');
const useremail = ref('');
const keyword = ref('');
userStore.setUsername(username.value);

const countDown = ref(0);

async function getCode() {
  
  if (!useremail.value.trim()) {
    alert('请输入邮箱！');
    return;
  }

  try {
    const response = await axios.post('/api/register/getCode', {
      params: { email: useremail.value.trim() }    //URL + 参数
    });

    alert(response.data.msg);
    countDown.value = 60;

    const timer = setInterval(function() {
      countDown.value--;
      if (countDown.value <= 0) {
        clearInterval(timer);
      }
    }, 1000);

  } catch (error) {
    alert('发送失败，请重试！');
  }
}
</script>

<style scoped>
.page-container {
    width: 100vw;
    
    height: 100vh;
    
    display: flex;
    
    justify-content: center;
    
    align-items: center;
    
    margin: 0;
    padding: 0;
}

.register-panel {
    width: 500px;
    padding: 30px;
    background-color: white;
    border-radius: 12px;
    /* 圆角优化，更现代 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    /* 阴影加深，更有层次感 */
    opacity: 0.95;
    /* 略微提高不透明度，更清晰 */
    box-sizing: border-box;
    /* 确保padding不撑大宽度 */
}

h3 {
    text-align: center;
    color: palevioletred;
    font-size: 22px;
    margin: 0 0 15px;
    font-weight: 600;
}

hr {
    height: 2px;
    background-color: palevioletred;
    border: none;
    margin: 0 0 25px;
}

.register-form {
    width: 100%;
}

.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 12px;
    
}

.form-group label {
    width: 120px;
    
    text-align: right;
    color: #333;
    font-size: 14px;
    font-weight: 500;
}


.form-input {
    flex: 1;
    height: 38px;
    padding: 0 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;

}

.form-submit {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.submit-btn {
    width: 160px;
    height: 42px;
    background-color: palevioletred;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
}

.submit-btn:hover {
    background-color: #d35478;
}
</style>