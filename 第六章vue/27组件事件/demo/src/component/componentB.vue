<template>
    <h3>componentB</h3>
    <p>{{ title }}</p>
    <p>{{ onevent("传递数据") }}</p>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    props:{
        title:String,
        onevent:Function
    }
}
</script>