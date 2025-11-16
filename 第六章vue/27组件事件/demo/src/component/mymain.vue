<template>
    <h3>main</h3>
    <search @searchevent="getsearch"/>
    <p>搜索内容为:{{ search }}</p>
</template>


<script>
import search from './search.vue';
export default{
    data(){
        return{
            search:''
        }
    },
    components:{
        search
    },
    methods:{
        getsearch(data){
            this.search=data;
        }
    }
}
</script>