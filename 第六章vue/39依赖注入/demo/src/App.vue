<template>
<h3>祖宗</h3>
<parent />
</template>

<script>
//只能由上往下
import parent from './component/parent.vue';
export default{
  data(){
    return{
      message:"爷爷的财产!"
    }
  },
  components:{
    parent
  },
  provide(){
    return{
      message:this.message
    }
  }
}
</script>