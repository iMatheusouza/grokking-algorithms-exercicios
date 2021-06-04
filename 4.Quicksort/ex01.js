//funcao recursiva que soma todos os elementos de um array de numeros
function sum(arr) {
  if (arr.length == 0) {
    return 0;
  }

  else {
    let number = arr.pop();
    return number + sum(arr);
  }
}

console.log(sum([2, 4, 6]));//resultado esperado 12