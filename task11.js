arr=[1,3,5,7,9];

let sum = recursive_sum(arr,arr.length);

console.log(sum);

function recursive_sum(arr,length){
    if(length<=0) return 0;

    return (recursive_sum(arr,length-1) +  arr[length-1]);
}