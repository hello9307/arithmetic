<template>
    <div class="sort">
        <!--快速排序-->
        <div class="module">
            <div class="module-title">快速排序</div>
            <div class="module-content">
                <QuickSort></QuickSort>
            </div>
        </div>

        <!--快速排序-->
        <div class="module">
            <div class="module-title">选择排序</div>
            <div class="module-content">
                <Selection></Selection>
            </div>
        </div>

        <!--插入排序-->
        <div class="module">
            <div class="module-title">插入排序</div>
            <div class="module-content">
                <Insert></Insert>
            </div>
        </div>

        <!--冒泡排序-->
        <div class="module">
            <div class="module-title">冒泡排序</div>
            <div class="module-content">
                <Bubbling></Bubbling>
            </div>
        </div>

    </div>
</template>

<script>
    import QuickSort from "./components/QuickSort"
    import Selection from "./components/Selection"
    import Insert from "./components/Insert"
    import Bubbling from "./components/Bubbling"

    export default {
        name: "Sort",
        components: {
            QuickSort,
            Selection,
            Insert,
            Bubbling
        },

    }
</script>

<style scoped lang="less">
    .sort{

    }
    .module{
        .module-title{
            font-size: 16px;
            font-weight: bold;
            padding-left: 10px;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 3px;
                height: 80%;
                background-color: red;
            }
        }
    }
</style>
