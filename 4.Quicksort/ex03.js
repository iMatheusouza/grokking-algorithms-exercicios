//ache o maior numero na lista usando recursao
function max(arr) {
  if (arr.length == 1) {
    return arr[0];
  }

  else {
    let currentNumber = arr.pop();
    let nextNumber = max(arr);
    //Se o numero atual for maior que o número que foi retornado, devolva ele, caso não, devolva o numero retornado
    return currentNumber >= nextNumber ? currentNumber : nextNumber
  }
}

console.log(max([-5, -5, -1, -2, -1, -3, 2]));