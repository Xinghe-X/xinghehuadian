<template>
  <h3>模板语法</h3>
  <p>{{ msg }}</p>
  <p>{{ number+1 }}</p>
  <p>{{ ok?"李烈峰":"许列峰" }}</p>
  <p>{{ message.split("").reverse().join("") }}</p>
  <p>{{ rawHtml }}</p>
  <p v-html="rawHtml"></p>
</template>


<script>
// {{}}只支持表达式 不支持语句比如 var a=1
// v-html 给这个属性就可以给予属性
  export default{
    data(){
      return{
        msg:"神奇的语法",
        number:10,
        ok:true,
        message:"大家好",
        rawHtml:"<a href='https://4399.com'>小游戏</a>"
      }
    }
  }
</script>

