const a = [0, 1, 3, 1, 4, 1, 5, 4];

function task6(array) {
    const result = {};
    for (var i = 0; i < array.length; i++) {
        if (!result[array[i]]) result[array[i]] = 0;
        ++result[array[i]];
    }
    return result;
}

console.log(task6(a));
/*
function task6(array){
    let arr=[];
    const result={};
    array1=array;
    array2=array;
    for(let i=0; i<array1.length;i++){
        let x=1;
        for(let j=0; j<array2.length;j++){
            if(i!=j && array[i]==array[j]) x++;
        }
        if(!result[arr[i]]) result[arr[i]]=x;
    }
    return result;
}

console.log(task6(a));
*/