//problem1: format statement correctly 
function multiply(a, b){
    a * b;
  }
//solution1: add return statement
function multiply(a, b){
    return a * b;
   }
//solution1.1: arrow func
multiply = (a, b) => a * b;  
//problem:2: switch
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
      case 2:
        name = 'Venus'
      case 3:
        name = 'Earth'
      case 4:
        name = 'Mars'
      case 5:
        name = 'Jupiter'
      case 6:
        name = 'Saturn'
      case 7:
        name = 'Uranus'
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }
//solution:2 i used return statements 
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        return 'Mercury';
      case 2:
        return 'Venus';
      case 3:
        return 'Earth';
      case 4:
        return 'Mars';
      case 5:
        return 'Jupiter';
      case 6:
        return 'Saturn';
      case 7:
        return 'Uranus';
      case 8:
        return 'Neptune';
    }
    
    return name;
  }
//problem:3 reverse 'world'  =>  'dlrow', 'word'   =>  'drow'
function solution(str){
 
}
//solution:3 use split to make array of chars, reverse, then join to put it back together
//the return sends it back to the call
function solution(str){
    return str.split('').reverse().join('');
}
//solution:3.1 arrow
const solution = str => str.split('').reverse().join('');


//problem:4 check if even or odd
function evenOrOdd(number) {
  
}
//solution:4
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Even';
    }
    return "Odd";
  }
//solution:4.1 ternary with arrow
  const evenOrOdd = number => (number % 2 === 0) ? 'Even' : 'Odd';
//solution:4.2 arrow
const evenOrOdd = (number) => {
    if (number % 2 === 0) {
      return 'Even';
    }
    return 'Odd';
  };


  //problem:5 get the count of certain chars from an input string
function getCount(str){
  return 0;
}
//solution:5 string goes into func loop over chars, include method is activated and adds count to vowelCount compared against isVowel, voweCount returned
function getCount(str) {
  let vowelCount = 0;
  const isVowel = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < str.length; i++ ) {
    if (isVowel.includes(str[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

//problem:6Is n divisible by x and y? provide boolean
function isDivisible(n, x, y) {
  return 0;
}
//solution:6 3 numbers provided, are the last 2 divisable by the first repectively? two variables instantiated for the divisions
//then we check if the two variables && are integers with Number.isInteger because js is a cuck where everything is a fuckin float 
function isDivisible(n, x, y) {
  const result1 = n / x;
  const result2 = n / y;
  return Number.isInteger(result1) && Number.isInteger(result2);
    
}
//solution:6.1 ai provided
function isDivisible(n, x, y) {
  return Number.isInteger(n / x) && Number.isInteger(n / y);
}

//problem:7 see if number is neg if not retun neg
function makeNegative(num) {}
//solution:7 check if over zero, make neg otherwise return num, tripped up on checking below zero when unneeded
// i thought that i had to check if i twas negative to leave it alone but i was screwing up zero.
function makeNegative(num) {
  if (num > 0){
     return -num;
   }  else {
     return num;
   }
  } 

 //solution:7.1 you can literally reverse the math built in like this
 function makeNegative(num) {
  return -Math.abs(num);
} 
//problem:8 find smallest int in an array
class SmallestIntegerFinder {
  findSmallestInt(args) {} }
//solution:8 used the builtin fed it the spread operator ... then args to feed the array in one value at a time
class SmallestIntegerFinder {
  findSmallestInt(args) {
  let result = Math.min(...args);
  return result;
  }
}

//solution:8.1 you could have skipped the variable and just hung the func off of the return
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
//problem:9 Write a program that finds the summation of every number from 1 to num.
//The number will always be a positive integer greater than 0.
var summation = function (num) {
}
/*solution9 This is a bad solution but it's my solution. I struggled also with the first for loop
i did for(let i = 1; i < num; i++) which was missing the last number. */
var summation = function (num) {
	if (num > 0) {
		let resultArr = [];
		let sum = 0;
		for(let i = 1; i <= num; i++){
			let currentValue = i;
			resultArr.push(currentValue);
    }
    for (let i2 = 0; i2 < resultArr.length; i2++ ) {
  		sum += resultArr[i2];
    }
		return sum;	
	}
};

//solution 9.1 no need for array we can add them as we insert them into the return variable with sum += i;
var summation = function (num) {
  if (num > 0) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
};

//problem 10
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
}

//solution 10  a is accumulator and v is the currentvalue.
//we use the arrow to describe the function that handles what to do with those values. basically the accumulator is
// equal to and summed with each curentvalue in the array that is passed in. then that summation is divided by the .length method
//then math.floor rounds down to the nearest number and that final value is what what is returned.
function getAverage(marks){
  return Math.floor(marks.reduce((a, v) => (a += v))/marks.length);
}
//solution 10.1 count is length of input array, sum is set to 0, for each item in count we perform addition on sum,
//while simultaneously addint the new value to sum with the += marks[i] is linking the iterable which is linked ot marks
//then we divide sum by the legnth and use math.floor to round down to whole int and return it
function getAverage(marks){
  const count = marks.length
  let sum = 0;
  for(let i = 0; i < count; i++){
    sum += marks[i];
    }
  return Math.floor(sum / marks.length);
}
//problem 11 a function that counts the number of truths present in the array .
function countSheeps(arrayOfSheep) {}
//solution 11 we use .filter(Boolean) filters the false keeping only true,
// .length records the number of truthy values left then that number is returned
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
//problem 12 remove first and last letter of string
function removeChar(str){}
//solution easy peasy
function removeChar(str){
  return str.slice(1,-1);
};
//problem 13 In an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {}
//solution 13 .reduce has accumulator and currentValue as a and c, arrow function says if currentValue (c)
// is more than zero perform ternary operation, if true accumulator + currentValue if false (:) just return accumulator
//and then we state the starting value of accumulator which is zero.
function positiveSum(arr) {
  const sum = arr.reduce((a, c) => c > 0 ? a + c : a, 0);
  return sum;
}
//problem 14 The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2){}
//solution 14 variable created with an object containing key value pairs, keys are operands and the values are the functions to perform
//a, b are place holders for the basicOp values, and the arrow func points to the operation to be performed, then we just return the value of operations
//with the data put in: operation, value1, value2.* note since the operation parameter is a variable, you need to use square bracket notation to access the property dynamically.
function basicOp(operation, value1, value2)
{
  const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};
return operations[operation](value1, value2);
}
//problem 15 split a string and convert it into an array of words.
function stringToArray(string){}
//solution 15 split at the spaces.
function stringToArray(string){
  return string.split(" ");
}
//solution 15.1 with le arrowwww string to array is func name =(string) is the passed in parameter => points to the func
//where we split at the spaces and is implicitly returned because laack of curly braces
const stringToArray = (string) => string.split(" ");
//problem 16
function noSpace(x){}
//solution 16 regex, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions The two \ \ identify that were looking for space,
//the g syas find all within the string or 'global' and the , "" says replace with nothing. we trow that in the scope of .replace
function noSpace(x){
  return x.replace(/ /g, "");
  }
//solution 16.1 split at the spaces and joined with an empty string as seperator, aka nothing
function noSpace(x){
  return x.split(" ").join("");
  }
//problem 17 Given an array of integers, return a new array with each value doubled.
function maps(x){}
//solution 17 map method creates creates new array after performing an action on every element in provided array,
//array.map(callback[, thisObject]); the object is the place holder for the iterable * 2 thats returned to result
// then result is returned to maps
function maps(x){
  const result = x.map(function (n){
    return n * 2});
   return result;
 }
//solution 17.1 using arrow long form
 function maps(x){
  let result = x.map(x => x * 2);
  return result;
}
//solution 17.2 arrow
const maps = x => x.map(x => x * 2);

//problem 18 Write a function f that takes two parameters: a (an integer) and b (an integer).
//It should return true if a is greater by two times than or equal to b, and false otherwise.
function hero(bullets, dragons){}
//solution 18 simple if else
function hero(bullets, dragons){
  if (bullets >= (dragons * 2)) {
    return true;
  } else {
    return false;
  }
}
//problem 19 fix it
function arrayPlusArray(arr1, arr2) {
return arr1 + arr2;
}
//solution 19 combine em with .concat then use .reduce on the mother trucker by adding the currentValue(c) to the accumulator(a)
function arrayPlusArray(arr1, arr2) {
  let combined = arr1.concat(arr2);
  let sum = combined.reduce(function(a, c){
    return a + c;
  }, 0);
  return sum;
}
//problem 20 Given a year, return the century it is in.
function century(year) {}
//solution 20 basically round up the year divided by 100. so 1920 / 100 = 19.2 then math.ceil rounds up
function century(year) {
  return Math.ceil(year/100);
  }
//problem 21 cat and dog age calculator based on human years
var humanYearsCatYearsDogYears = function(humanYears) {
  return[0,0,0];
}
//solution 21 CAT 15 cat first year, +9 cat second year, +4 for each year after,DOG 15 dog first year, +9 dog second year,+5 for each year after
let humanYearsCatYearsDogYears = function(humanYears) {
  if(humanYears === 1) {
    return [humanYears, 15, 15];
  }
  if(humanYears === 2) {
    return [humanYears, 24, 24];
  }
  
  const excessYears = humanYears - 2;
  const extraCatYears = excessYears * 4;
  const extraDogYears = excessYears * 5;
  
  return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}
//problem 22 match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//Points are awarded for each match as follows:if x > y: 3 points (win) if x < y: 0 points (loss) if x = y: 1 point (tie) return number of points
function points(gamesArr) {}
//solution 22 for loop grabs the iterator one at a time, splits it at the colon into x and y, then preforms the if else
// adding to totalPoints and returning it at the end
function points(gamesArr) {
  let totalPoints = 0;
  for (let i = 0; i < gamesArr.length; i++) {
    const value = gamesArr[i];
    const[x, y] = value.split(':');
    if(x > y) {
      totalPoints += 3;
    } else if (x === y){
      totalPoints +=1;
    }
  }
  return totalPoints;
}

//problem 23 returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers
function sumTwoSmallestNumbers(numbers) {  }
//solution 23 we're using the .sort method with the a - b param to sort lowest to highest, return that to sorted,
// .slice the first two values and store them in an array smallestNums, add two two numbers at indez 0 and 1,
//store that in result and return it.
function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort(function(a,b) {
      return a - b;
    });
    
    let smallestNums = sorted.slice(0, 2);
    let result = smallestNums[0] + smallestNums[1];
    return result;
  }
//problem 24 repeat string n times
function repeatStr (n, s) {}
//solution 24 .repeat nuff said bebygurl
function repeatStr (n, s) {
  return  s.repeat(n);
}
//solution 24.1 now its an arrow
const repeatStr = (n, s) =>  s.repeat(n);
//problem 25 rock paper skeezers
const rps1 = (p1, p2) => {}
/*solution 25
define the choices,
*/
const rps = (p1, p2) => {
  const choices = ['rock', 'paper', 'scissors']

  p1 = p1.toLowerCase();
  p2 = p2.toLowerCase();

  
  if (!choices.includes(p1)) {
    return 'invalid input for p1'
  }
  
  if (!choices.includes(p2)) {
    return 'invalid input for p2'
  }
    
  if (p1 === p2) {
    return "Draw!";
  }
  
  if (p1 === 'rock'){
    if(p2 === 'scissors') {
      return 'Player 1 won!'
    } else {
      return 'Player 2 won!'
    }
  }

  if (p1 === 'paper'){
    if(p2 === 'rock') {
      return 'Player 1 won!'
    } else {
      return 'Player 2 won!'
    }
  }
  
  if (p1 === 'scissors'){
    if(p2 === 'paper') {
      return 'Player 1 won!'
    } else {
      return 'Player 2 won!'
    }
  }
}
