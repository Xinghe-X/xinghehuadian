<template>
    <h3>component1</h3>
    <p>{{ message }}</p>
    <button @click="updatehandle">更新数据</button>
</template>

<script>
    export default{
        data(){
            return{
                message:"老数据"
            }
        },
        //切换之后自动卸载
        beforeUnmount(){
            console.log("组件卸载之前");
        },
        unmounted(){
            console.log("组件卸载之后")
        },
        methods:{
            updatehandle(){
                this.message="新数据"
            }
        }
    }
</script>