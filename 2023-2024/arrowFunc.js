const arrowFunc = () => {console.log('arrow');}






/*Arrow Functions */

//Syntax
(param1, param2) => { statements }
(param1, param2) => expression //will still return
//(param1, param2) => { return expression } // longer form with return

//(singleParam) => { statements }//these next two lines are equivlent
singleParam => { statements }

() => { statements } //these dont need params but do need ( if no params)
() => expression
//() => { return expression; }

//(param1, param2, paramN) => expression 


// NORMAL FUNCTION
let multiply1 = function(x, y) {
  return x * y;
}; 
 
// ARROW FUNCTION 
let multiply2 = (x, y) => { return x * y };
// or
let multiply3 = (x, y) => x*y;


// Example
let materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

let materialsLength1 = materials.map(function(material) { 
  return material.length;
});

let materialsLength2 = materials.map((material) => {
  return material.length;
});

let materialsLength3 = materials.map(material => material.length);


// No binding of 'this'
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // In a normal function, 'this' refers to global object, here it properly refers to the person object
    console.log(this.age)
  }, 3);
}

let p = new Person();


// Returning object literals
let func = () => ({foo: 1});

// no Line breaks with the operator arrow func syntax
let func1 = () => 1; 
