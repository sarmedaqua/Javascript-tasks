const array = [50, 60, 70];

function task1_reversing_array(array){
    let arr=[];
    var j=array.length;
    for(let i=0; i<array.length;i++){
        j--;
        arr[i]=array[j];
    }
    return arr;
}

console.log(task1_reversing_array(array));