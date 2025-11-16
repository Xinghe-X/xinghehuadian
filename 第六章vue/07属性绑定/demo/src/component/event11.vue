<template>
    <h3>内联事件处理器</h3>
    <button @click="count++">add</button>
    <p>{{ count }}</p>
</template>
<script>
//我们可以使用v-on指令简写为@来监听dom事件，并在触发时
//执行对应的JS
export default {
    data(){
        return{
            count:0,
        }
    }
}
</script>