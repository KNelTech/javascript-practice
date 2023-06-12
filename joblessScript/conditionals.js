const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber;

if (jsExpression) {
    console.log('This is true');
}

if (jsExpression) {
    console.log('this is true');
}   else {
    console.log('falsey');
}

if (jsExpression) {
    console.log('truthhh');
} else if (firstNumber > 0 ) {
    console.log('false, fN is greater');
} else {
    console.log('false and fN 0 or less');
}

if (jsExpression) { console.log('format dif')};

/* so in order
true
true
true
"format dif"
*/