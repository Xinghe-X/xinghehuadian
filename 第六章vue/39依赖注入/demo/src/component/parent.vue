<template>
<h3>parent</h3>
<child />
</template>

<script>
import child from './child.vue';
export default{
  data(){
    return{
      
    }
  },
  components:{
    child
  },
}
</script>