<template>
  <div class="backgroundset">
    <myheader />
    <mymain />
    <core />
  </div>

</template>

<script>
import mymain from './consist/mymain.vue';
import myheader from './consist/myheader.vue';
import core from './consist/core.vue';
export default {
  data() {
    return {
      username:''
    }
  },
  methods: {
    getusername(user){
      this.username=user;
    }
  },
  components: {
    mymain,
    myheader,
    core
  }
}

alert("欢迎！");

</script>
<style>
.backgroundset {
  background-image: url('@/material/background2.png');
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  overflow: hidden
}

html,
body {
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>