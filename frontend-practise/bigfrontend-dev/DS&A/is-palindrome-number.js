function isPalindrome(num) {
    if(!num || typeof num !== 'number') {
        return false;
    }
    let arr = [];
    while(num > 0) {
        remainder = num%10;
        num = Math.floor(num/10);
        arr.push(remainder);
    }
    let i=0; j=arr.length-1;
    while(i<=j) {
        if(arr[i] === arr[j]) {
            i++;
            j--;
        } else {
            break;
        }
    }
    if(arr.length%2 === 0) {
        if(i === j+1) {
            return true;
        }
    } else {
        if(i===j+2) {
            return true;
        }
    }
return false;
}

console.log(isPalindrome());