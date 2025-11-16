<script>
//属性绑定用v-bind
//简写 直接用:
export default {
    data() {
        return {
            msg: "无敌周星成大王",
            dynamicId: "appid",
            isButtonDisabled: false,
            object: {
                name: "style1",
                isButtonDisabled: false
            }
        }
    }
}
</script>
<template>
    <div v-bind:id="dynamicId">{{ msg }}</div>
    <button :disabled="isButtonDisabled">性别</button>
    <div :class="object"></div>
</template>
<style>
#appid {
    color: blue;
}
</style>