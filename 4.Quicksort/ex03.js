//ache o maior numero na lista usando recursao
function max(arr) {
  if (arr.lenght == 0) {
    return 0;
  }

  else {
    let currentNumber = arr.pop();
    return currentNumber > max(arr) ? currentNumber : max(arr);
  }
}

let checkArray = [1, 3, 2]

console.log(max(checkArray));