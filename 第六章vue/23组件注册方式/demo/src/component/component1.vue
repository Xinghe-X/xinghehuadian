<template>
    <h3>component1</h3>
    <component2 :title="title" :age="age"/>
</template>

<script>
import component2 from './component2.vue';
//26组件传递props校验
export default{
    data(){
        return{
            title:"标题",
        }
    },
    components:{
        component2,
    }
}
</script>