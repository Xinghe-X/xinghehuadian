<template>
  <!-- <mybase>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </mybase> -->
  <!-- <slots2>
  具名插槽
    <template #:diyige>
      <h3>{{ message }}</h3>
    </template>
<template #:dierge>
      <p>内容</p>
    </template>
</slots2> -->
<slot3 #="slotprops">
<h3>{{ currenttxet }}-{{ slotprops.msg }}</h3>
</slot3>
</template>

<script>
import mybase from './component/mybase.vue';
import slots2 from './component/slots2.vue';
import slot3 from './component/slot3.vue';
export default {
  data() {
    return {
      //虽然是传递给子级的数据 但是作用域还是父级
      message: "插槽内容续集",
      currenttxet:"测试内容"
    }
  },
  components: {
    mybase,
    slots2,
    slot3
  }
}
</script>