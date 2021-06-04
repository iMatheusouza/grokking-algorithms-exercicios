//contar qunatos elementos tem dentro de uma lista, usando recursao
function count(arr) {
  if(arr.length == 0) {
    return 0;
  }

  else {
    let elementCount = 1;
    arr.pop();
    return elementCount + count(arr);
  }
}

const checkArray = [1, 2, 3, 4];

console.log(count(checkArray));//resultado esperado 4




