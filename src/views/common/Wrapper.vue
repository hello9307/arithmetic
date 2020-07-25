<template>
    <div class="wrapper">
        <div class="nav-box">
            <router-link v-for="item in navs" :key="item.id" :to="item.path">{{item.label}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Wrapper",
        data(){
            return {
                navs: [
                    {
                        id: 1,
                        label: '排序',
                        path: '/sort'
                    },
                    {
                        id: 2,
                        label: '其它',
                        path: '/sort'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .nav-box{
        display: flex;
        background-color: #000;
        a{
            width: 100px;
            height: 60px;
            line-height: 60px;
            color: #fff;
            text-decoration: none;
            text-align: center;
            font-size: 18px;
        }
    }
</style>
