/*
write a function to produce such output by giving an array of chars and integer
['i', 'n', 9, 5, 'd', 8, 'i', 1, 'a', '7']
a) it concatenates all string aof all chars i.e. 'india'
b) it sums all integer even integer give in string also '7'. so sum is 9+5+8+1+7 = 30

Output: "india 30"
*/

arr= ['i', 'n', 9, 5, 'd', 8, 'i', 1, 'a', '7'];

function task12(arr) {
    let str="";
    let sum=0;
    for(let i=0; i<arr.length; i++){
        if( isNaN(arr[i]) ) str+=arr[i];
        else sum+= parseInt(arr[i]);
    }
    str+=" "+sum;
    return str;
}

console.log(task12(arr));