//https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm


const string1 = 'kodi';
string1.replace('k', 'd');
//"dodi"
console.log(string1);
//"kodi"

const newName = string1.replace('odi', 'awk');
console.log(newName);
//kawk

string1.toUpperCase();
//KODI

let str2 = 'hello mf';

const result = str2.toUpperCase().split(" ")
console.log(result);
//Array [ "HELLO", "MF" ]

result.indexOf("MF");
//1


const step1 = str2.toUpperCase();

const step2 = step1.split(" ");

const step3 = step2.indexOf("mf");

console.log(step3);
//1

