import { createApp } from 'vue'
import App from './App.vue'
import myheader from './pagers/myheader.vue'

const app=createApp(App)

// 在这中间写
app.component("myheader",myheader)


app.mount('#app')