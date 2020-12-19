//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

const sumTo = (n) => {
    if (typeof n !== 'number' || n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return n + sumTo(n-1);
}

//console.log('sum till n is', sumTo(10000));


// factorial

const fibonacci = (n) => {
    if (typeof n !== 'number' || n <= 0) {
        return 0;
    }

    if (n==1 || n==2) {
        return 1;
    }
    let memoize = new Map();
    if (memoize.get(n)) {
        return memoize.get(n);
    }
    let factn = factorial(n-1) + factorial(n-2);
    memoize.set(n, factn);

    return factn;
}

//console.log(fibonacci(5));

// factorial

const factorial = (n) => {
    if (typeof n !== 'number' || n <= 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(5));