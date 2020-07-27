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
            <div class="module-title">插入排序(对于少量元素比较有效)</div>
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


</style>
