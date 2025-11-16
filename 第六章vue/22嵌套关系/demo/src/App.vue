<template>
<myheader />
<mymain />
<myaside />
</template>

<script>
import myheader from './pagers/myheader.vue';
import mymain from './pagers/mymain.vue';
import myaside from './pagers/myaside.vue';
export default{
  components:{
    myheader,
    mymain,
    myaside
  }
}
</script>

<style>

</style>