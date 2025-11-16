<template>
<h3>侦听器</h3>
<p>{{ message }}</p>
<button @click="updata">更新数据</button>
</template>
<script>
export default{
    data(){
        return{
            message:"hello"
        }
    },
    methods:{
        updata(){
            this.message="world"
        }
    },
    watch:{
        //函数名必须和侦听函数名一样
        message(a,b){
            //数据发生变化时 自动执行函数
            console.log(a,b)
        }
    }
}
</script>