/* ******************************************************************************************************* EJ 1*/

function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

/* ******************************************************************************************************* EJ 2*/

const s = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea

  // Usar s = [2, 5, 7] sería inválido
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Cambia solo el código encima de esta línea
}
editInPlace();

/* ******************************************************************************************************* EJ 3*/

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Cambia solo el código debajo de esta línea
  Object.freeze(MATH_CONSTANTS);
  // Cambia solo el código encima de esta línea
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/* ******************************************************************************************************* EJ 4*/

const magic = () => new Date();

/* ******************************************************************************************************* EJ 5*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/* ******************************************************************************************************* EJ 6*/

const increment = (number, value = 1) => number + value;

/* ******************************************************************************************************* EJ 7*/
