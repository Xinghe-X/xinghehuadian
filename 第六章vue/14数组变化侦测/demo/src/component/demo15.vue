<template>
    <h3>{{ itbaizhan.name }}</h3>
    <p>{{ itbaizhancontent }}</p>
    <p>{{ itbaizhancontents() }}</p>
</template>
<script>
export default{
    data(){
        return{
            itbaizhan:{
                name:"百战程序员",
                content:["前端","java"]
            }
        }
    },
    computed:{
        //计算属性
        itbaizhancontent(){
            return this.itbaizhan.content.length>0?'yes':'no'
        }
    },
    methods:{
        //实现功能一样 但是计算属性只计算一次 方法调用一次计算一次
        itbaizhancontents(){
            return this.itbaizhan.content.length>0?'yes':'no'
        }
    }
}
</script>