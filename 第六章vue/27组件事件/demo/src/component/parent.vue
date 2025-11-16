<template>
  <child @click1="gethander"/>
  <p>父元素:{{ message }}</p>
</template>

<script>
import child from './child.vue';
export default{
  data(){
    return{
      message:""
    }
  },
  components:{
    child
  },
  methods:{
    gethander(data){
      console.log("触发了",data);
      this.message=data
    }
  }
}
</script>