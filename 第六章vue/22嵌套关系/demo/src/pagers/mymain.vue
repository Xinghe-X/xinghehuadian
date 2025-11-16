<template>
    <div class="main">
        <h3>Main</h3>
        <myarticel />
        <myarticel />
    </div>
</template>

<script>
import myarticel from './myarticel.vue';
export default {
    components: {
        myarticel
    }
}
</script>

<style scoped>
.main {
    float: left;
    width: 70%;
    height: 600px;
    border: 5px solid burlywood;
    box-sizing: border-box;
}
</style>