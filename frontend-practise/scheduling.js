/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.
*/

let printNumbers = (from, to) => {
    let timer;
    let i = from;
    timer = setInterval(() => {
        if(i==to) {
            clearInterval(timer);
        }
        console.log(i);
        i++;
    }, 1000)
}

printNumbers(1,10);

let printNumbersWithTimeout = (from, to) => {
    let timer;
    i = from;
    timer = setTimeout(function go() {
        if(i<=to) {
            console.log(i);
            setTimeout(go, 1000);
        }
        i++;
    }, 1000);
}

printNumbersWithTimeout(1,10);