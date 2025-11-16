<template>
<p :style="{color:activecolor,fontSize:fontSize+'px'}">Style绑定</p>

</template>

<script>
//可以绑定对象
    export default{
        data(){
            return{
                activecolor:"green",
                fontSize:50            
            }
        }
    }

</script>