1. To start the flask app, navigate to the backend directory and run "python3 app.py"

2. To start the react app, navigate to the frontend directory and run "npm start"

3. The browser page automatically opens with the react app running at localhost:3000

4. Provide the following typescript code snippet to generate the test cases:
   
// This is a simple utility function to check if a number is even
function isEven(num: number): boolean {
    return num % 2 === 0;
}

/*
    This function calculates the factorial of a non-negative integer
    using recursion.
*/
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// This function converts a string to uppercase
function toUpperCase(str: string): string {
    return str.toUpperCase();
}

/*
    This function calculates the sum of all elements in an array
    of numbers.
*/
function sum(numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
} 
