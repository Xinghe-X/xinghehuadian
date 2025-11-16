<template>
<p :class="{'active':isactive,'style2':isstyle2}">class样式绑定</p>

</template>
<script>
//可以是对象 可以是数组 还可以数组嵌套对象 但是不能对象嵌套数组
export default {
    data(){
        return{
            isactive:true,
            isstyle2:true,
        }
    }
}

</script>
<style>
.active{
    color: blue;
    font-size: 30dp;
}

</style>