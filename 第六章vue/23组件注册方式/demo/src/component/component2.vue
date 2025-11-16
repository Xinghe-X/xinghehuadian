<template>
    <h3>component2</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
</template>

<script>
//26组件传递props校验  props是只读的
export default{
    data(){
        return{
            
        }
    },
    props:{
        title:{
            //要求接收的数值
            type:[String,Number,Array,Object]
        },
        age:{
            type:Number,
            default:0
        },
        //数字和字符串可以default 数组或对象需要通过工厂函数返回默认值
        names:{
            //工厂函数
            type:Array,
            default(){
                return ["空"]
            }
        },
        ID:{
            tyoe:Number,
            //必选项 不给就警报
            required:true
        }
    }
}
</script>