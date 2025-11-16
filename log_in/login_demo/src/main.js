import { createApp } from 'vue'
import App from './App.vue'
import router from './vuerouter'
// 1、导入createPinia
import { createPinia } from 'pinia'
// 2、实行方法得到实例
const pinia = createPinia()
// 3、把实例添加到app应用中
const app=createApp(App)

app.use(router)
app.use(pinia)


app.mount('#app')