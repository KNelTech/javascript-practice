//https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm


const string1 = 'kodi';
string1.replace('k', 'd');
//"dodi"
console.log(string1);
//"kodi"

const newName = string1.replace('odi', 'andy');
console.log(newName);
//kandy

string1.toUpperCase();
//KODI

let str2 = 'hello guy';

const result = str2.toUpperCase().split(" ")
console.log(result);
//Array [ "HELLO", "GUY" ]

result.indexOf("GUY");
//1


const step1 = str2.toUpperCase();

const step2 = step1.split(" ");

const step3 = step2.indexOf("andy");

console.log(step3);
//1

