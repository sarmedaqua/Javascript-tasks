const a = [1, "2", "1", 3, 100, "100", "134"];

function task10(array) {
  const result = {};
  var arr = array;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (parseInt(arr[i]) > parseInt(arr[j])) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    result[i]=parseInt(arr[i]);
  }
  return result;
}

console.log(task10(a));