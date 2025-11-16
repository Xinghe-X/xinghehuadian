<template>
    <h3>列表渲染</h3>
    <p v-for="(item,index) in names">{{ item }}-{{ index }}</p>
    <div v-for="image in image">
        <p>{{ image.title }}</p>
        <img :src="image.avator" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            names:["李烈峰","张瑞超","刁超越"],
            image:[
                {
                    "id":1,
                    "title":"小姐姐1号",
                    "avator":"https://ts1.tc.mm.bing.net/th/id/OIP-C.xtdXc7GaE8OpWhIwB0f4hgHaO0?w=160&h=204&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.4&pid=3.1&rm=2"
                },
                {
                    "id":2,
                    "title":"小姐姐2号",
                    "avator":"https://ts1.tc.mm.bing.net/th/id/OIP-C.rmErfgB4z4qKXRV7dMPJNQHaHX?w=194&h=204&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.4&pid=3.1&rm=2"
                }
            ]
        }
    }
}
</script>
