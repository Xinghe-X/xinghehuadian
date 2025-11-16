<template>
<h3>child</h3>
<button @click="clickevent">传递数据</button>
</template>

<script>
export default{
  data(){
    return{
      
    }
  },
  methods:{
    clickevent(){
      //自定义事件
      this.$emit("click1","100w")
    }
  }
}
</script>