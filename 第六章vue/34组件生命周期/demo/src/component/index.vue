<template>
<h3>组件的生命周期</h3>
<p>{{ message }}</p>
<button @click="updatehander">更新数据</button>
</template>

<script>
/* 
       生命周期函数
        创建期： beforeCreate  created
        挂载期： beforeMounte  mounted
        更新期： beforeUpdate  updated
        销毁期： beforeUnmount unmounted



*/

export default{
  data(){
    return{
      message:"更新之前"
    }
  },
  methods:{
    updatehander(){
      this.message="更新之后"
    }
  },
  beforeCreate(){
    console.log("组件创建之前")
  },
  created(){
    console.log("组件创建之后")
  },
  beforeMount(){
    console.log("组件渲染之前")
  },
  mounted(){
    console.log("组件渲染之后")
  },
  beforeUpdate(){
    console.log("组件更新之前")
  },
  updated(){
    console.log("组件更新之后")
  },
  beforeUnmount(){
    console.log("组件卸载之前")
  },
  unmounted(){
    console.log("组件卸载之后")
  }
}
</script>