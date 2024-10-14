/*
push() / pop() / shift() / unshift()
slice()
splice()
findIndex() / indexOf()
map()
forEach()
includes()
filter()
reduce()
*/

// const means the variable stays the same
//but the array itself remains mutable
const arr = [1, 2, 3, 5];

arr.pop();
//5 .pop returns value after pulling from the end of the array

arr.push(4, 5, 6);
//6 .push returns new length and adds to the end of array

console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr.unshift(0);
// 7 adds to beginning and returns the length

console.log(arr);
// [0, 1, 2, 3, 4, 5, 6]
///////////////////
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice());
//['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
/////////////////////splice is a mutating method
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
/////////////////////////////
const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

const myFish2= ["angel", "clown", "mandarin", "sturgeon"];
const removed2 = myFish2.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
//////////////////////////////

const compArr = [
    { firstname: 'Bob', lastname: 'Smith' },
    { firstname: 'Alice', lastname: 'Smith' },
    { firstname: 'Jon', lastname: 'Smith' },
    { firstname: 'Jon', lastname: 'Doe' },
  ];

  compArr.findIndex((arrItem) => arrItem.lastname !== 'Smith');
  // 3 findIndex returns index of first element that's not smith

compArr.map(i => i.lastname = 'McPupupants');
// [ 'McPupupants', 'McPupupants', 'McPupupants', 'McPupupants' ] returns replaced values

console.log(compArr);
/*[
  { firstname: 'Bob', lastname: 'McPupupants' },
  { firstname: 'Alice', lastname: 'McPupupants' },
  { firstname: 'Jon', lastname: 'McPupupants' },
  { firstname: 'Jon', lastname: 'McPupupants' }
]
*/
///////////////
const numArr = [1, 2, 3, 4];

numArr.forEach((item, index) => console.log(item, index));
/* the item then the index are returned, for each is arrays only
1 0
2 1
3 2
4 3
*/

const myColors = ["red", "blue", "green", "yellow", "purple"];

myColors.includes('purple');
//true checked the array for purp

myColors.indexOf('purple') !== -1
//true, if the indexOf method does not rutrn a negative zero for nothing found then true, it exists

const arr69 = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
  
  let invalidEntries = 0;
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  
  const arrByID = arr.filter(filterByID);
  
  console.log("Filtered Array\n", arrByID);
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  //.reduce has accumulator and current value, here we take in two arrays, then concat em into combined
  // then .reduce em by iterating over combined adding each current Value: c to the accumulator: a starting at index zero, then returning up
  function arrayPlusArray(arr1, arr2) {
    let combined = arr1.concat(arr2);
    let sum = combined.reduce(function(a, c){
      return a + c;
    }, 0);
    return sum;
  }