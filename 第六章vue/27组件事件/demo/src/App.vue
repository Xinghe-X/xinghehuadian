<template>
  <h3>组件事件</h3>
  <!-- <parent /> -->
  <!-- <mymain /> -->
   <componentA />
</template>

<script>
import parent from './component/parent.vue';
import mymain from './component/mymain.vue';
import componentA from './component/componentA.vue';
//组件事件实现子传父
export default {
  data() {
    return {

    }
  },
  components: {
    parent,
    mymain,
    componentA

  }
}
</script>