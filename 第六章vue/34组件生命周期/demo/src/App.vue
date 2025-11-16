<template>
  <uselife />
  <KeepAlive>
    <component :is="tapcomponent"></component>
  </KeepAlive>
  <button @click="changehandle">切换组件</button>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import uselife from './component/uselife.vue';
import component1 from './component/component1.vue';
//import component2 from './component/component2.vue';
// 异步加载组件
const component2 = defineAsyncComponent(function(){
  import("./component/component2.vue")
  }
)
export default {
  data() {
    return {
      tapcomponent: "component1"
    }
  },
  components: {
    uselife,
    component1,
    component2
  },
  methods: {
    changehandle() {
      this.tapcomponent = this.tapcomponent == "component1" ? "component2" : "component1"
    }
  }
}
</script>