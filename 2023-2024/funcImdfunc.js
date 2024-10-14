function hotDog() {
    console.log('I eat far to many of these.');
}

/*immediately called function, no name and in ()
Storing the func in parenthasis makes it an expression,
and the last () tell compiler to run immediately.
*/
(function () {
    console.log('immediately called function');
})();

/*
This immediately invoked function can be called because it has a name.
num = 3 is a default parameter that can be changed by passing the func call,
with a new number in ()  
*/

(favNumber = function(num = 420) {
    console.log('fav number is ' + num);
})();

favNumber(69);

/*
^^^
we can use this to avoid declaring variables in global scope
and to create quick closures. doing this avoids conflictions
*/


/*
within the imdfunc a is briefly changed then printed to console and because 
javascript has function level scope all vars within the function are local
and cant be accessed outside the function after it has been run

*/

let a = 2;

(function(){
    let a = 69;
    console.log(a);
})();

console.log(a);

/*
this is the same idea but implement in block scope
 which is also a local variable scope
*/


let c = 2;

{
    let c = 69;
    console.log(c);
}

console.log(c);

//func with passed in params

/*
function declarations and function expressions, respectively,
can both be used to define functions in JavaScript, they have some differences in behavior.

    Function Declaration:

function myfunction() {
  // Function body
}

In a function declaration, the keyword function is used to define the function, followed by the function name and a pair of parentheses for parameters (if any).
The function body is enclosed in curly braces {}. One key characteristic of function declarations is that they are hoisted to the top of their scope.
This means that you can call the function before its declaration in your code, and it will still work.

Function Expression:

    let myfunction = function() {
      // Function body
    };

    In a function expression, the function is assigned to a variable using the assignment operator =. 
    The function itself is created anonymously (without a name), and it is assigned to the variable myfunction.
     Function expressions are not hoisted like function declarations, so you need to define them before using them in your code.

Here are some important differences between the two approaches:

    Hoisting: Function declarations are hoisted, meaning they can be called before they are declared in the code. 
    Function expressions are not hoisted, so they must be defined before they are used.

    Naming: Function declarations have a name, which allows them to refer to themselves recursively. 
    Function expressions can be anonymous or have a name assigned to the variable they are stored in.

    Flexibility: Function expressions provide more flexibility since they can be assigned to variables and passed as arguments to other functions,
     making them useful for creating higher-order functions.

In general, function declarations are commonly used for defining standalone functions, 
while function expressions are useful for assigning functions to variables or passing them as arguments in situations where you need more flexibility.
*/