<template>
    <h3>方法事件处理器</h3>
    <button @click="addcount('hello')">add</button>
    <p>{{ count }}</p>
</template>
<script>
//我们可以使用v-on指令简写为@来监听dom事件，并在触发时
//执行对应的JS
const {log}=console;
export default {
    data(){
        return{
            count:0,
        }
    },
    //所有的方法或者函数
    methods:{
        addcount(msg){
            //读取到data里数据的方案 用this
            // log(e);
            // e.target.innerHTML="Add"+this.count;
            log(msg);
            this.count++;
        }
    }
}
</script>