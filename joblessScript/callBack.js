function mainFunction(randomNumber, shouldCall, callback) {
    let result = randomNumber;
    
    if (shouldCall) {
    result = callback(randomNumber);
    }
    return result;
}
mainFunction(20, true, (num) => num * 2);

/* 
This code defines a function called mainFunction that takes 3 parameters:

randomNumber: A number
shouldCall: A boolean that determines whether or not to call the callback function
callback: A callback function that will be invoked if shouldCall is true
Inside the mainFunction, it first sets result to be equal to randomNumber.

It then checks if shouldCall is true. If so, it invokes the callback function, passing in randomNumber, and sets result equal to the return value of the callback.

Finally, it returns result.

The last line calls mainFunction, passing in:

20 for randomNumber
true for shouldCall (so the callback will be invoked)
A callback function that multiplies the passed in number by 2
So the final result returned by that call to mainFunction will be 40.
*/
