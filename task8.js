//prime numbers
const a = 15; b = 100;
function task8(from, to) {

    let arr = [];
    for (let i = from; i <= to; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if ((i % j) == 0) {
                prime = false;
                break;
            }
        }
        if (prime === true) arr.push(i);
    }
    return arr;

}
console.log(task8(a, b));