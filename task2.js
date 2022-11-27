const num1 = 12321;
const num2 = 12345;


function task2_palindrome_checker(num){
    num=num.toString();
    var j=num.length;
    for(let i=0; i<Math.round(num.length/2);i++){
        j--;
        if(num[i]!=num[j]) return "Not Palindrome";
    }
    return "Palindrome";
}

console.log(task2_palindrome_checker(num1));
console.log(task2_palindrome_checker(num2));