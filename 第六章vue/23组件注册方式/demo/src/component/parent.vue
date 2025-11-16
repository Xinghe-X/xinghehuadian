<template>
    <h3>Parent</h3>
    <child :name="name" :age="age"/>
</template>

<script>
import child from './child.vue';
export default{
    data(){
        return{
            name:"给你100w",
            age:20
            //动态绑定
        }
    },
    components:{
        child
    }
}
</script>