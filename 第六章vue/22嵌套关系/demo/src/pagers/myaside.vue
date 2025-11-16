<template>
<div class="aside">
    <h3>Aside</h3>
    <myitem />
    <myitem />
    <myitem />
</div>
</template>

<script>
import myitem from './myitem.vue';
    export default{
        components:{
            myitem
        }
    }
</script>

<style scoped>
.aside{
    float: right;
    width: 30%;
    height: 600px;
    border: 5px solid burlywood;
    box-sizing: border-box;
}
</style>