<template>
    <div class="cross-the-bridge">
        <div>
            <h5>题目：</h5>
            <p>
               有5个人过桥,桥上有一个火把燃烧时间为30秒,桥一次只能过两人,过去还要把火炬送回,这六人走过一次桥的时间分别是6,1,3,12,8秒,应该怎样走才能保证到桥对面?
            </p>
        </div>
        <div>
            <h4>答案：</h4>
            <ol>
                <li>1，3过桥1回来；用时4</li>
                <li>1，6过桥1回来；用时7</li>
                <li>8，12过桥，3回来；用时15</li>
                <li>1，3过桥；用时3</li>
                <li>一共用时29</li>
            </ol>
        </div>
        <div>
            <h4>思路：</h4>
            <ol>
                <li>耗时最多的两个肯定是一起过最省时间</li>
                <li>回来最多躺的一定是用时最少的</li>
                <li>有一趟是用时第二少的去接用时最少的</li>
            </ol>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CrossTheBridge"
    }
</script>

<style scoped>

</style>
