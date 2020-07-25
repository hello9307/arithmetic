<template>
    <div>
        <p>依次比较相邻两个数字，小的位置在前</p>
        <p>重复以上步骤，知道排序完成</p>
        <p></p>
        <pre>
            function bubbleSork(arr){
                let temp;
                // 第一个for比较几趟
                for(let i = 0;i < arr.length-1; i++){
                    // 第二个for谁和谁比较 没一趟都把最大的放在后面了，所以后面的可以不用比较了
                    for(let j = 0; j < arr.length-i-1; j++){
                        if(arr[j]>arr[j+1]){
                            temp = arr[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = temp;
                        }
                    }
                }
                return arr;
            }

            let arr=[1,2,3,4,5,8,6,2,5,1];
            console.log(bubbleSork(arr));
        </pre>
    </div>
</template>

<script>
    export default {
        name: "Bubbling",
        created(){
            function bubbleSork(arr){
                let temp;
                // 第一个for比较几趟
                for(let i = 0;i < arr.length-1; i++){
                    // 第二个for谁和谁比较
                    for(let j = 0; j < arr.length-i-1; j++){
                        if(arr[j]>arr[j+1]){
                            temp = arr[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = temp;
                        }
                    }
                }
                return arr;
            }

            let arr=[1,2,3,4,5,8,6,2,5,1];
            console.log(bubbleSork(arr));
        }
    }
</script>

<style scoped>

</style>
