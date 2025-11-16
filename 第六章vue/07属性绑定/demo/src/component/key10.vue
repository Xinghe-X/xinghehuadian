<template>
    <h3>KEY属性添加到v-for中</h3>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>
</template>

<script>
//key 找一个唯一ID 确保有唯一索引 当更新时确保能找到
export default {
    data() {
        return {
            names: ["刁超越", "张瑞超", "张一帆"]
        }
    }
}
</script>