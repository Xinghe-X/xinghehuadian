<template>
<h3>组件生命周期函数应用</h3>
<p ref="name">百战程序员</p>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    methods:{

    },
    created(){
        //模拟网络请求 但是最好放在mounted中 渲染完成后再取
    },
    beforeMount(){
        console.log(this.$refs.name); //undefine
    },
    mounted(){
        console.log(this.$refs.name)
    }
}
</script>