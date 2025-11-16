<template>
    <h3>表单输入绑定</h3>
    <form>
        <input type="text" v-model.lazy="message">
        <p>{{ message }}</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </form>
</template>


<script>
// 修饰符 .number 只接受数字 .trim 只接受空格 .lazy 去掉实时获取
export default {
    data() {
        return {
            message: "",
            checked:false
        }
    }
}
</script>