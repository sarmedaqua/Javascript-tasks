const a = [1, "2", "1", 3, 100, "100", "134"];

function task10(arr) {
  const result = {};

  arr.sort((a,b) => a-b);

  for (var i = 0; i < arr.length; i++) result[i] = parseInt(arr[i]);
  
  return result;
}

console.log(task10(a));