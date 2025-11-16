<template>
<h3>Slot再续集</h3>
<slot :msg="childmessage"></slot>
</template>


<script>
//同时使用父级和子级数据
export default{
    data(){
        return{
            childmessage:"子组件数据"
        }
    }
}
</script>