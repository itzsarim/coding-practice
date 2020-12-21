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
    i = from;
    setTimeout(function go() {
        if(i<=to) {
            console.log(i);
            setTimeout(go, 1000);
        }
        i++;
    }, 1000);
}

printNumbersWithTimeout(1,10);


function printNumbersWithTimeoutNew(from, to) {
    for(let i=from; i<=to; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000*i);
    }
}

function printNumbersWithIntevalNew(from, to) {
    let i=from;
    let timer;
    timer = setInterval(() => {
        console.log(i);
        if(i<to) {
            i++;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

printNumbersWithIntevalNew(1,10);

printNumbersWithTimeoutNew(1,10);