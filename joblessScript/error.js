try {
    const num = 20;
    num.toUpperCase();
} catch (err) {
    console.log(err instanceof TypeError);
    console.log(err.message);
}
//true num.toUpperCase is not a function
/* 
The try block is where the potentially problematic code is placed. 
In this case, it tries to call the toUpperCase() method on the num variable.
Since num is a number, not a string, attempting to call toUpperCase() on it results in a TypeError.
The catch block is executed when an error occurs in the corresponding try block.
In this case, the catch block is triggered because a TypeError occurred.
Inside the catch block, err represents the error object that was thrown. 
The console.log(err instanceof TypeError) statement checks if the error is an instance of the TypeError class. 
It will output true in this case because the caught error is indeed a TypeError.
The console.log(err.message) statement outputs the error message associated with the caught error. 
In this case, it will display something like "num.toUpperCase is not a function", 
indicating that the toUpperCase() method cannot be called on a number.
*/
