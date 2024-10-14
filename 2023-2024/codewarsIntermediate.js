//1.)
//take a list of non-negative integers and strings 
//and returns a new list with the strings filtered
function filter_list(l) {
  return l.filter(arr => typeof arr === 'number')
};
//here we return the truthy values that we defined as numbers with the typeof method
//remember arr is a placeholder
////////////////////////////////////////////////////////////////////////////////
//2.)
//find the difference subtracting b from a, arrays
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
  }
// return a but filtered by whats not in b with the !b.includes
const arrayDiff = (a, b) => a.filter(x => !b.includes(x));
//same but in an arrow
/////////////////////////////////////////////////////////////////////////////////
//3.)
//Given: an array containing hashes of names return a string with the names seperated by commas,
// except the last two are seperated with ampersand instead
function list(names){
  
  let finalString = '';
  
  if (names.length === 1) {
    return names[0].name;
  }
  
  names.forEach((item, ind) => {
    const name = item.name;
    
    if(ind === names.length - 1) {
      finalString = finalString + ' & ' + name;
    } else if(ind === names.length - 2) {
      finalString = finalString + name;
    } else {
      finalString = finalString + name + ', ';
    }
  });
  return finalString
}
//initialize a variable called finalString as an empty string and if thats the case skip everything and return it
//then we pull the value of name from names at index zero and return it if theres only one name
//and that gets that case out of the way/ returns if thats the only case, if thats not the case then we move to the forEach we run on names
//which has two dynamic variables to iterate with, one handling the index and one the item itself
//then we pull the name prop from item (which pulls from names) and put it into a variable called names
//then check if its the last element in names and puts an ampersand before the element and adds that to the end of the finalString
//then we check if this is the second to last element and just add it to the end of the string
//this final else takes all other names and adds them to the string with a comma after. then we return to finalstring which is returned

//ai solution
function list(names) {
  if (names.length === 1) {
    return names[0].name;
  }
  
  const formattedNames = names.map(item => item.name);
  const lastTwoNames = formattedNames.splice(-2).join(' & ');

  return formattedNames.concat(lastTwoNames).join(', ');
}
//we pull the value of name from names at index zero and return it if theres only one name
//and that gets that case out of the way/ returns if thats the only case,
//map method is used to extract only the name property from each object in the names array.
//creating an array of names called formattedNames.
//splice method is used with a index -2 to pull the last two names from the formattedNames array, storing in lastTwoNames variable.
//so we cut off the last two from formattednames with splice -2, then join them with ' & '
//then we concat both variables joining all remaining all remeaning elements with a comma
/////////////////////////////////////////////////////////////////////////////////
//4.)
//validate 4 or 6 digit pin, ^ is beginning, \d is any number {4} is 4 times 
// | is or, then repeated for six times of a number in parans for scope $ is end
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }
/////////////////////////////////////////////////////////////////////////////////
//5.)
//one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
//each direction is single block for each letter (direction), 
//return true if returns to starting point in ten moves

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  
  let vertical = 0;
  
  let horizontal = 0;
  
  for(let direction of walk) {
    if(direction ==='n'){
      vertical++;
    }else if(direction ==='s'){
      vertical--;
    }else if(direction ==='e'){
      horizontal++;
    }else if(direction ==='w'){
      horizontal--;
    }
  }
  return vertical === 0 && horizontal === 0;
}  
//if > 10 false, make variables for x and y axis, for of loop where direction is the walk elements
// add and subtract with if else if applying to vert and horz variables,
//return implicit true if horz and vert are 0
/////////////////////////////////////////////////////////////////////////////////
//6.)
//return multiplicative persistence
function persistence(num) {
  if (num < 10) {
    return 0;
  }
 
 let count = 0;
 
 while (num >= 10) {
 num = num.toString().split("").reduce((a, n) => a *= Number(n), 1);
   count++
 }
 return count;
}
// turn a number to a string, split into array of strings, use reduce to turn the string back to an number
// and multipl that by the accumulated value adding the product to the accumulator, we start at [1] 
//because [0] is where the accumulator goes. we add one to count each time we loop then return when num < 10
/////////////////////////////////////////////////////////////////////////////////
//7.)
//count the total number of lowercase letters in a string.
function lowercaseCount(str) {
  const matches = str.match(/[a-z]/g);
  return matches ? matches.length : 0;
}
//match returns an array to matches when used with my regex a-z globally on the string
//return matches after the ternary true being the length and false being 0
/////////////////////////////////////////////////////////////////////////////////
//8.) take array of nums or string. keep in order but remove repeats that are next to eachother.
function uniqueInOrder(sequence) {
  if (typeof sequence === 'string') {
    sequence = sequence.split('');
  }
  return sequence.filter((value, index) => value !== sequence[index - 1]);
}
// if string split to array into sequence, filter sequence keeping track of value and index
// if the value is not the same as the value as the the value one index behind eval true adding that back to sequence.
// filter rids all falsy
/////////////////////////////////////////////////////////////////////////////////
//9.)
//check if todays date matches the input date object, user would have to choose an object
function isToday(d) {
  let today = new Date();
  return today.toDateString() == d.toDateString();
}
//heres the same thing with validation,
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

function isToday(d) {
  try {
    if (!isValidDate(d)) {
      throw new Error('Invalid date');
    }

    let today = new Date();
    return today.toDateString() === d.toDateString();
  } catch (error) {
    console.error('Error:', error.message);
    return false;
  }
}

//this is so stupid just make them pick a date object and forgo this gross spaghetti
/////////////////////////////////////////////////////////////////////////////////
//10.)
//capitalize the letters that occupy even indexes and odd indexes separately for an input string
//return an array of two strings
function capitalize(s){
  const arr1 = s.split("");
  const arr2 = s.split("");
  arr1.forEach((item, index, original) => {
    if (index % 2 === 0) {
      original[index]= item.toUpperCase();
    }
  });
  arr2.forEach((item, index, original) => {
    if (index % 2 !== 0) {
      original[index] = item.toUpperCase();
    }
  });
   return [arr1.join(""), arr2.join("")];
}
//split input string into two arrays we forEach for even and odd respectively then add em back to the original
//then we join the arrays into strings respectively and return them as an array of two strings