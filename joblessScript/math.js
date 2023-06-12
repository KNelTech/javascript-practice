console.log(Math.PI); //3.141592653589793
//////////////////////////////////////////////////////////
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs(4); // 4
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
//////////////////////////////////////////////////////////
Math.ceil(Math.PI); // 4
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
//////////////////////////////////////////////////////////
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
//////////////////////////////////////////////////////////
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
////////
//psuedo random**

Math.floor(Math.random() * 3);
// Expected output: 0, 1 or 2

Math.ceil(Math.random() * 3);
// Expected output: 1, 2 or 3 never zero

Math.floor(Math.random() * 1);
// Expected output: 0 and only zero ever here

Math.ceil(Math.random() * 1);
// Expected output: 1 and only ever 1

console.log(Math.random());
// Expected output:**0.4838447875622197(not constant value) a psuedo number from 0 to <1

Math.floor(Math.random() * 100);
//This will generate a random integer between 0 and 99.
/* 
This produces the same index each time 
const arr = ['What time is it?', 'Not hungry', 'I am Chodie', 'Hi',];

const randInd = Math.floor(Math.random() * arr.length)

console.log(arr[randInd]);

*/
/*
In the first snippet, the random index is generated once using Math.floor(Math.random() * arr.length) and stored in the variable randInd.
Since this code is not wrapped inside a function or block, the same index value is used repeatedly when console.log(arr[randInd]) is executed.
As a result, the same element from the array is printed each time the code runs.
In the second snippet, the function getRandomIndex is defined. It takes an array as a parameter (in this case, placeholderVariableForTheArray).
 Inside the function, a new random index is generated every time the function is called using Math.floor(Math.random() * placeholderVariableForTheArray.length).
The random index is then returned by the function.
*/

const arr = ['What time is it?', 'Not hungry', 'I am Chodie', 'Hi'];

function getRandomIndex(placeholderVariableForTheArray) {
  return Math.floor(Math.random() * placeholderVariableForTheArray.length);
}

console.log(arr[getRandomIndex(arr)]);
//This works as intended
//////////////////////////////////////////////////////////
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1

//////////////////////////////////////////////////////////

console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array2 = [1, 3, 2];
console.log(Math.max(...array2));
// Expected output: 3

//////////////////////////////////////////////////////////
