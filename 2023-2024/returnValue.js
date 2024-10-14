const returnFunc = () => { const a = 20; return a;}
const result = returnFunc();
console.log(result);
//20

const returnFunc1 = () => { const a = 20; return a < 30;}
const result2 = returnFunc1();
console.log(result2);
//true

//remember if defined outside func, globals scope, within func local scope

const theNumber = 20

let theFunction = () => {
    if (theNumber < 15) {return 'theNumber is less than 15'}
    return 40;
}
theFunction();
//40

let theFunction1 = () => {
    if (theNumber < 30) {return 'theNumber is less than 30'}
    return 40;
}

theFunction1();
//the number is less than 30

const returnFunc2 = () => { const a = 20; return a;}

const myObj ={prop1:50, prop2:returnFunc2}

console.log( myObj.prop2())

//20