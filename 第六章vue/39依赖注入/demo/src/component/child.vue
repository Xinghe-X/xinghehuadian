<template>
<h3>child</h3>
<p>{{ message }}</p>
</template>

<script>
export default{
  data(){
    return{
      
    }
  },
  inject:["message"]
}
</script>