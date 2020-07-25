<template>
    <div>
        <p>取一个值，遍历数组，小的放左边，大的放右边。当前需要的值是合并左右两个数组在快排结果与取得的值。</p>
        <p>递归，需要a的值就需要b，c的值，需要bc的值就需要efgh的值，他们的处理方式都是一样的。最小的opqrst等值处理后不是返回一个空数组就是长度为1的数组</p>
        <pre>
            function quickSort(arr){
                if(arr.length <= 1){
                    return arr;
                }

                let len = arr.length;
                let baseNumber = Math.floor(len/2);
                let base=arr.splice(baseNumber,1);
                let left=[];
                let right=[];

                for(let i=0; i < arr.length; i++){
                    if(arr[i] < base){
                        left.push(arr[i]);
                    }else{
                        right.push(arr[i]);
                    }
                }

                return quickSort(left).concat(base,quickSort(right));
            }

            let arr=[5,2,8,6,4,7,9,5,3];
            console.log(quickSort(arr));
        </pre>
    </div>
</template>

<script>
    export default {
        name: "QuickSort",
        created(){
            function quickSort(arr){
                if(arr.length<=1){
                    return arr;
                }

                let len = arr.length;
                let baseNumber=Math.floor(len/2);
                let base=arr.splice(baseNumber,1);
                let left=[];
                let right=[];

                for(let i=0;i<arr.length;i++){
                    if(arr[i]<base){
                        left.push(arr[i]);
                    }else{
                        right.push(arr[i]);
                    }
                }

                return quickSort(left).concat(base,quickSort(right));
            }

            let arr=[5,2,8,6,4,7,9,5,3];
            // console.log(quickSort(arr));
        }
    }
</script>

<style scoped>

</style>
