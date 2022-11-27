const array1 = [50, 60, 70];
const array2 = [20, 30, 40, 70];
const array3 = [20, 20, 60, 70];
const array4 = [25, 90, 80];

function task5_unique_value_in_2_arrays(array1, array2) {
    let arr = [];
    let x = 0;

    if (array1.length < array2.length) {
        let swap = array2;
        array2 = array1;
        array1 = swap;
    }

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                if (x > 0) {
                    for (let z = 0; z < x; z++) {
                        if (arr[z] != array1[i]) {
                            arr[x] = array1[i];
                            x++;
                        }
                    }
                }
                else {
                    arr[x] = array1[i];
                    x++;
                }
            }
        }

    }
    return arr;
}

console.log(task5_unique_value_in_2_arrays(array2, array3));