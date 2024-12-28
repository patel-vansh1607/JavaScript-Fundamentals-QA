//Write a function that takes an array of numbers and returns their sum.

function sumArray(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    return sum;
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80,];
console.log(sumArray(numbers)); 