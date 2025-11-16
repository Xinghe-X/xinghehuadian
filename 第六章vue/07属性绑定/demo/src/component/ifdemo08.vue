<template>
    <h3>条件渲染</h3>
    <div v-if="flag">张博洋是蠢蛋</div>
    <div v-else>刘子凡是蠢蛋</div>
    <div v-if="type==='A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <div v-else>Not A/B/C</div>
    <div v-show="flag">脱裤子放屁吗</div>
</template>


<script>
//功能上 v-show同if一样
// 不变用if 经常变用show
    export default{
        data(){
            return{
                flag:true,
                type:"D"
            }
        }
    }
</script>