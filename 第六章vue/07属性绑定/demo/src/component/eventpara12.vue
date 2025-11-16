<template>
    <h3>事件传参</h3>
    <p @click="getNameHandler(item)" v-for="(item, index) in names" :key="index">{{ item }}</p>
</template>



<script>
const { log } = console;
export default {
    data() {
        return {
            names: ["李", "张"]
        }
    },
    methods: {
        getNameHandler(msg) {
            log(msg)
        }
    }
}
</script>