const input = [1,2,3,5,2];
const X = 8;

const sumtox = (a,x) => {
    let start = 0;
    let end = 0;
    let sum = 0;
    while(start < a.length) {
        if(sum<x) {
            sum = sum + a[end];
            end++;
        }
        else if(sum>x) {
            sum = sum - a[start];
            start++;
        }
        else {
            break;
        }
    }
    return {'s': start, 'e': end-1};
}

console.log(sumtox(input,X));

  