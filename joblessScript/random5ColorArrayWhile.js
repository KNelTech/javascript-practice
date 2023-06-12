const x = function () {
const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];

const randomIndex = Math.floor(Math.random() * colors.length);
console.log('im working')

const randomColor = colors[randomIndex];

alert('your random color is ' + randomColor);
}

const random5 = function(){
let y = 0
while (y < 5) {
    x();
    y += 1
}
}