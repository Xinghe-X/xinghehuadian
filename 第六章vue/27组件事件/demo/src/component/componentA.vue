<template>
    <h3>componentA</h3>
    <componentB title="title" :onevent="datafn"/>
    <p>{{ message }}</p>
</template>

<script>
import componentB from './componentB.vue';
export default {
    data() {
        return {
            message:""
        }
    },
    components: {
        componentB
    },
    methods:{
        datafn(data){
            this.message=data
        }
    }
}
</script>