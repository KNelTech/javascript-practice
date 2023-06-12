const myString = 'My Dog jumped on the bed. My dog is a bad Dog';  
// Declare and initialize myString variable

const newString = myString.replaceAll('Dog', 'Cat');  
// Replace all occurrences of 'Dog' with 'Cat' and store in newString

console.log(newString);//"My Cat jumped on the bed. My dog is a bad Cat"  

const correctString = myString.replaceAll(/dog/ig, 'cat')  
// Replace all occurrences of 'dog' with 'cat' using a regex and case insensitive flag

console.log(correctString);//"My cat jumped on the bed. My cat is a bad cat"  

//////////////////////////////////
const upperString = 'this is a string';
upperString.toUpperCase();//'SOME STRING'
//////////////////////////////////////
const anyString = "Mozilla";  
// Declare and initialize anyString variable

// The substring method in JavaScript is used to extract a portion of a string based on specified starting and ending indexes.
console.log(anyString.substring(0, 1)); // 'M'  
console.log(anyString.substring(1, 0)); // 'M'  
console.log(anyString.substring(0, 6)); // 'Mozill'  
console.log(anyString.substring(4)); // 'lla'  
console.log(anyString.substring(4, 7)); // 'lla'  
console.log(anyString.substring(7, 4)); // 'lla'  
console.log(anyString.substring(0, 7)); // 'Mozilla'  
console.log(anyString.substring(0, 10)); // 'Mozilla'  

////////////////////////
const text = "Mozilla";  

// Takes 4 last characters of string
console.log(text.substring(text.length - 4));  
//'illa'  

// Takes last character of string
console.log(text.substring(text.length - 1));  
//'a'  
///////////////////////////////////////////////
str1 = 'hi im kodi';  
console.log(str1.charAt(0).toUpperCase() + str1.slice(1));  
//"Hi im kodi" To uppercase the first character of a string, use str.charAt(0).toUpperCase() to capitalize it  
//and concatenate it with str.slice(1) to include the remaining string. modifies original  

console.log(str1[0].toUpperCase() + str1.substring(1, str1.length));  
//'Hi im kodi' make char at str1 index 0 uppercase + return from index one the length of str1
////////////////////////////////////////////////  

let extData = [
    { title: '  Object1  ', number: '  One  ' },  
    { title: '  Object2  ', number: '  Two  ' },  
    { title: '  Object3  ', number: '  Three  ' }  
  ];  
// Declare and initialize extData array of objects

// notice the two spaces before and after each property value  

for (let i = 0; i < extData.length; i++) {  
    extData[i].title = currentTitle.trim();  
    extData[i].number = currentNumber.trim();  
}  
// Loop through extData array and trim title and number properties

// for loop through the length of extData which is an array of objects,  
//each iterable in the respective key is trimmed using a placeholder variable with the trim method,  
//these values are returned back to the array after mutation  


const regex = /[a-zA-Z]+/;  
const str = 'skjdgbAIKJGb123ZSFgb';  
str.match(regex);  
//[ "skjdgbAIKJGb" ] The .match() method in JavaScript searches a string for a specified pattern  
//and returns an array of all matches found using a regular expression or string pattern