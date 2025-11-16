<template>
  <div class="container">{{ message }}</div>
</template>

<script>
  export default {
    data(){
      return{
        message:"组件基础组成"
      }
    }
  }
</script>

<style scoped>
/* 让样式只在当前组件中生效  默认是全局作用域*/
.container{
  font-size: 30px;
  color:red;
}
</style>