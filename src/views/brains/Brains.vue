<template>
    <div class="brains">
        <div class="module">
            <div class="module-title">过桥问题</div>
            <div class="module-content">
                <CrossTheBridge></CrossTheBridge>
            </div>
        </div>

        <div class="module">
            <div class="module-title">倒水问题</div>
            <div class="module-content">
                <PourWater></PourWater>
            </div>
        </div>
    </div>
</template>

<script>
    import CrossTheBridge from "./components/CrossTheBridge"
    import PourWater from "./components/PourWater"

    export default {
        name: "Brains",
        components: {
            CrossTheBridge,
            PourWater
        }
    }
</script>

<style scoped lang="less">

</style>
