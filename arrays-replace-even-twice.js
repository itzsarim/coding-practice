// Given an array of numbers, 
// replace each even number with twoof the same number. 
// e.g, [1,2,5,6,8, , , ,] -> [1,2,2,5,6,6,8,8].

const input = [1,2,5,6,8,-1,-1,-1];

const replaceEven = (input) => {
    if(input.length == 0 || input == null) {
        console.log('empty input');
    }
    let i = input.length-1;
    let last = input.length-1;
    while(i>=0) {
        if(input[i] != -1) {
            if(input[i] % 2 === 0) {
                temp = input[i];
                input[i] = input[last];
                input[last] = temp;
                input[last-1] = temp;
                last--;
                last--;
            } else {
                temp = input[i];
                input[i] = input[last];
                input[last] = temp;
                input[last-1] = temp;
                last--;
            }
        }
        i--;
    }
    return input;
};

console.log(replaceEven(input));