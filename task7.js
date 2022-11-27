const array = [4, -4, 0, 2, -6];

function task7(array) {
    let arr = [];
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        let arr1 = [];
        if (array[i] != 0) {
            for (let j = 0; j < array.length; j++) {
                if (i != j) {
                    if ((array[i] + array[j]) == 0) {
                        arr1.push(array[i]);
                        arr1.push(array[j]);
                        arr[x] = arr1;
                        x++;
                    }
                }
            }
        }
        else {
            arr1 = [0];
            arr[x] = arr1;
            x++;
        }
    }
    return arr;
}

console.log(task7(array));