<template>
    <div class="pour-water">
        <div>
            <h5>题目：</h5>
            <p>
                有3个杯子，容量分别是19L，13L，7L；目前13L和7L的杯子都装满了水，19L的杯子是空的；怎么通过三个杯子倒来倒去获得两杯子10L的水？
            </p>
        </div>
        <div>
            <h4>答案：</h4>
            <ol>
                <li>7L的导入19L的</li>
                <li>13L的导入19L的</li>
                <li>19L的导入7L的</li>
                <li>7L的导入13L的</li>
                <li>19L的导入7L的</li>
                <li>7L的导入13L的</li>
                <li>13L的导入19L的</li>
                <li>7L的导入13L的</li>
                <li>19L的导入7L的</li>
                <li>7L的导入13L的</li>
                <li>19L的导入7L的</li>
                <li>7L的导入13L的</li>
                <li>13L的导入19L的</li>
                <li>7L的导入13L的</li>
            </ol>
        </div>
        <div>
            <h4>操作规律：</h4>
            <ol>
                <li>小杯倒入大杯，中杯导入大杯，这时中杯肯定有剩下</li>
                <li>不断重复大杯倒入小杯，小杯倒入中杯，如果中杯满了，就将中杯导入大杯</li>
                <li>最后你就会发现，可以了</li>
            </ol>
        </div>
        <div>
            <h4>思路：</h4>
            <ol>
                <li>逆向思维，既然要获得两个10，那么最后一步只有17，3，0这种组合。</li>
                <li>那么他的上一步又是什么？4，13，3；（有时上一步有好几个答案。这时要记住这类水杯倒水问题有个固定顺序，顺序乱了就回鬼打墙了。顺序就是acb）</li>
                <li>然后就能得到答案并且找出规律了</li>
                <li>更深入的原因我就不得而知了</li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PourWater"
    }
</script>

<style scoped>

</style>
