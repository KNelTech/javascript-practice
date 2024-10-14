const emailValidator = new RegExp('^.+@.+\..+$');
/*^ asserts the start of the string.
.+ matches one or more characters of any type.
@ matches the "@" symbol.
.+ matches one or more characters of any type.
\. matches a literal dot.
.+ matches one or more characters of any type.
$ asserts the end of the string.*/

const notValid = 'potato@L';

const isItValid = emailValidator.test(notValid);
//FALSE

const isValid = 'potato@gmail.com';

const isItValid2 = emailValidator.test(isValid);
//TRUE



//Identifiers are generally between square brackets and identify what were looking for

const regex = new RegExp('g');

const string1 = 'steak is fantastic'; 
const string2 = 'bang goes the gun';

regex.test(string1);
//FALSE
regex.test(string2);
//TRUE

const regex2 = new RegExp('is');

regex2.test(string1);
//TRUE
regex.test(string2);
//FALSE

const regex3 = new RegExp('Is');

regex2.test(string1);
//FALSE
regex2.test(string2);
//FALSE
//CASE SENSITIVE

/[is]/.test(string1);
//TRUE
//brackets are a character group
/[A-Z]/.test(string1);
//FALSE
/[A-Z]/.test(string2);
//FALSE
/[a-z]/.test(string1);
//TRUE
/[a-z]/.test(string1);
//TRUE
//thats all of the alphabet its checking for

/[1-9]/.test(string1);
//FALSE obv but you get the point there

/[a-zA-Z1-9 ]/.test(string1);
//TRUE you can group em and that space will look for spaces too


// lack of brackets matches exact characters or allows literals
/./.test(string1);
//TRUE peroid is any character

/\d/.test(string1);
//that stands for any number

/\s/.test(string1);
//matches any white space characters, any spaces

/\w/.test(string1);
//TRUE matches all numbers and letters

/^s/.test(string1);
//TRUE the ^ means starts with and the letter is s

/^f/.test(string1);
//FALSE string1 does not start with f

/f/.test(string1);
//TRUE because it contains an f somewhere in the string

/f$/.test(string1);
//FALSE because the $ denotes at the end of the string

/c$/.test(string1);
//TRUE because there is a c at the end of the string

/(code|steak)/.test(string1);
//TRUE because we are check if code or steak is in that string



/[a-z]/.exec(string1);
// Output: ["e"]
//The exec() method, used with the regular expression /[a-z]/,
// searches for the first lowercase letter in a given string and returns it as an array element,
// or null if no lowercase letter is found.

/[1-9]/.exec(string1);
// Output: null

/* quantifiers are symbols or characters that specify the number of occurrences of a preceding element or group. They modify the behavior of the preceding pattern.

Common quantifiers in regular expressions include:

    * - Matches zero or more occurrences of the preceding element.
    + - Matches one or more occurrences of the preceding element.
    ? - Matches zero or one occurrence of the preceding element.
    {n} - Matches exactly 'n' occurrences of the preceding element.
    {n,} - Matches 'n' or more occurrences of the preceding element.
    {n,m} - Matches between 'n' and 'm' occurrences of the preceding element.
    */

/[a-z]*/.exec(string1);
//['steak'] because it stops at the space

string1.match(/[a-z]*/g);
//['steak', '', 'is', '', 'fantastic', ''] because were using the global flag g outside the / / 

/[a-z ]+/.exec(string1);
//[ "steak is fantastic" ]

/[a-z ]{4}/.exec(string1);
//[ "stea" ] the curly's are mathcing the first 4

const re = /\w+\s/g;
const str = "fee fi fo fum";
const myArray = str.match(re);
console.log(myArray);
// ["fee ", "fi ", "fo "] looks for one or more characters followed by a space,
//and it looks for this combination throughout the string.


/* FLAGS
d 	Generate indices for substring matches. 	
g 	Global search. 	
i 	Case-insensitive search. 	
m 	Allows ^ and $ to match newline characters. 	
s 	Allows . to match newline characters. 	
u 	"Unicode"; treat a pattern as a sequence of Unicode code points. 	
y 	Perform a "sticky" search that matches starting at the current position in the target string. 	
*/

const string3 = 'Hi, im kodi.';

/^[A-Z][A-Za-z ,.]*$/.exec(string3);
// ['Hi, im kodi.']

/.+/.exec(string3);
//[ "Hi, im kodi." ] any character '.' one or more time '+'