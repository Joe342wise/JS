// Challenge 1
const getCelcius = (f) => {
    return (f - 32) * 5 / 9;
}

console.log(`The temperature is ${getCelcius(32)} \xB0C`);

// Challenge 2
const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    }
}

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function(L, W) {
    const A = L * W;

    const output = `The area of the rectangle with a length of ${L} and width of ${W} is ${A}.`;

    console.log(output);
})(10, 5);