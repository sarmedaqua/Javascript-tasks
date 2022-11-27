/*
write a function to choose 2 numbers from array whose sum is closest to input number
INputs:
number => 30
array => [15, 14 , 21, 11, 4, 5]
Output:
[15,14] because 15 + 14 = 29 closest to 30
*/

const number = 30;
const arr = [15, 14, 21, 11, 4, 5];

function task13(arr, num) {
    let count;
    let count1;
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i===0) count1 = Math.abs(num - (arr[i] + arr[j]) );
            else if (i != j) {
                count = Math.abs(num - (arr[i] + arr[j]) );
                if (count1 >= count) {
                    count1 = count;
                    array = [arr[j], arr[i]];
                }
            }
        }
    }
    return array;
}

console.log(task13(arr, number));