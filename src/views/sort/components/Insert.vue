<template>
    <div>
        <p>遍历数组，将当前值与前一个对比。如果小，与前一个交换位置，继续往前对比，直到不小于</p>
        <p>遍历数组，当前位置往前都是从小到大排列</p>
        <pre>
            function insertSort(arr){
                let len=arr.length;
                var preIndex,current;
                for(let i = 1; i < len; i++){
                    preIndex=i-1;
                    current=arr[i];
                    while(preIndex>=0&&arr[preIndex]>current){
                        arr[preIndex+1]=arr[preIndex];
                        preIndex--;
                    }
                    arr[preIndex+1]=current;
                }
                return arr;
            }

            var let=[2,4,5,3,7,5];
            console.log(insetionSort(arr));
        </pre>
    </div>
</template>

<script>
    export default {
        name: "Insert",
        created(){
            function insertSort(arr){
                let len = arr.length;
                let preIndex,current;
                for(let i=1; i < len; i++){
                    preIndex=i-1;
                    current=arr[i];
                    while(preIndex >= 0 && arr[preIndex] > current){
                        arr[preIndex+1] = arr[preIndex];
                        preIndex--;
                    }
                    arr[preIndex+1] = current;
                }
                return arr;
            }

            let arr=[2,4,5,3,7,5];

            // console.log(insertSort(arr));
        }
    }
</script>

<style scoped>

</style>
