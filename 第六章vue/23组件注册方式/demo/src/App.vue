<template>
  <!-- <myheader /> -->
  <!-- <parent /> -->
   <component1 />
   <!-- <component2 /> -->
</template>

<script>
// 一个 Vue 组件在使用前需要先被注册。这样 Vue 才能在渲染模板时找到其对应的实现。组件注册有两种方式：全局注册和局部注册
//全局注册在main.js
//虽然全局注册方便 可能造成浪费（未使用只要注册都会打包） 使项目的依赖关系不是很明确

//组件传递数据 props
// import parent from './component/parent.vue';
import component1 from './component/component1.vue';
import component2 from './component/component2.vue';
export default{
  components:{
    // parent,
    component1,
    component2
  }
}
</script>

<style>

</style>