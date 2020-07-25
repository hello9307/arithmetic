<template>
    <div>
        <p>遍历数组，当前值于后面的每一个值比较,如果有比当前值小的值，交换值。</p>
        <p>这样遍历后当前值就是当前位置往后最小的值</p>
        <pre>
            function selectionSort(arr){
                for(let i=0;i < arr.length-1;i++){
                    for(let j=i+1;j < arr.length;j++){
                        if(arr[i]>arr[j]){
                            arr[i]=arr[j];
                        }
                    }
                }
                return arr;
            }

            let arr=[2,1,3,5,4,6,8];
            console.log(selectionSort(arr));
        </pre>
    </div>
</template>

<script>
    export default {
        name: "Selection",
        created() {
            function selectionSort(arr){
                for(let i=0;i<arr.length-1;i++){
                    for(let j=i+1;j<arr.length;j++){
                        if(arr[i]>arr[j]){
                            let temp = arr[i]
                            arr[i]=arr[j];
                            arr[j] = temp;
                        }
                    }
                }
                return arr;
            }

            let arr=[2,1,3,5,8,6,4];
            // console.log(selectionSort(arr));
        }
    }
</script>

<style scoped>

</style>
