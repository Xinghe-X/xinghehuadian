<template>
    <div class="main">
        <h3></h3>
        <myarticel />
    </div>
</template>

<script>
import myarticel from '@/component/consist/myarticel.vue';
import core from '@/component/consist/core.vue';
export default {
    components: {
        myarticel,
        core
    }
}
</script>

<style scoped>
.main {
    float: right;
    width: 60%;
    height: 600px;
    /* border: 3px solid burlywood; */
    box-sizing: border-box;
}
</style>