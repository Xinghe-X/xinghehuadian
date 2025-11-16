<template>
<h3> 数组变化侦听 </h3>
<button @click="addList">添加数据</button>
<ul>
    <li v-for="(item,index) in names" :key="index">{{ item }}</li>
</ul>
</template>

<script>
// 变更方法 Vue能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新
//push pop shift unshift splice sort reverse
//filter concat slice 不会改变原数组 而是返回一个新数组
    export default{
        data(){
            return{
                names:[
                    "刁超越","张瑞超","张一帆"]
            }
        },
        methods:{
            addList(){
                this.names=this.names.concat(["掉毛"])
            }
        }
    }
</script>