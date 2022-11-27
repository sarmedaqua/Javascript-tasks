const star = "*";
function task4_diamond_pattern(star, n) {
    let str = "";
    for (let x = 1; x <= n; x++) {
        for (let i = n; i > x; i--) {
            str += " ";
        }
        for (let j = 1; j <= (x * 2) - 1; j++) {
            str += "*";
        }
        str += "\n";
    }
    for (let x = 1; x <= n - 1; x++) {
        for (let i = 1; i <= x; i++) {
            str += " ";
        }
        for (let j = (n - x) * 2 - 1; j > 0; j--) {
            str += "*";
        }
        str += "\n";
    }
    return str;
}
console.log(task4_diamond_pattern(star, 3));