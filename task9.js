const a = ["abc", 2, 5.4, 'f', "pak", 3, 5.5,true];

function task9(array) {
    const result = {};
    for (var i = 0; i < array.length; i++) {
        let x = datatype_compute(array[i]);
        if (!result[x]) result[x] = 0;
        result[x]++;
    }
    return result;
}
function datatype_compute(variable) {
    if ((typeof variable) === "string") {
        if (variable.length === 1) return "char";
        else return "string";
    }
    else if ((typeof variable) === "number") {
        if (variable % 1 !== 0) return "float";
        else return "integer";
    }
    else return typeof variable;
    
}

console.log(task9(a));