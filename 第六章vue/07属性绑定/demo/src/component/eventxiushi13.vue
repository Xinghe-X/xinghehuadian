<template>
    <h3>事件修饰符</h3>
    <a @click.prevent="click" href="www.4399.com">4399小游戏</a>
    <div @click="clickDiv">
        <p @click.stop="clickP">测试冒泡</p>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        click() {
            //阻止默认事件
            //e.preventDefault();
            //用@click.prevent阻止默认事件而不是写在函数中
            console.log("点击了");
        },
        // 测试冒泡 触发子元素事件的同时 也触发了父元素事件
        // @clcik.stop 组织父元素事件触发
        clickDiv(){
            console.log("Div");
        },
        clickP(){
            console.log("P");
        }
    }
}
</script>