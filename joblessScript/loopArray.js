const arr = ['hot', 'cold', 'warm', 'your mother', 69, 420]

for (let i = 0; i <arr.length; i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }
}