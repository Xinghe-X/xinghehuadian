<template>
    <h3>Child</h3>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ["name", "age"]
    // 父级将数据传递给子级 传递数量不限
    // 只能父级传递给子级
    // 可以使字符串 数字 数组 对象
}
</script>