let str = "acbakayakbac";

let longestPalindrome = (str) => {
    if(str.length == 0) {
        return '';
    }
    if(str.length == 1) {
        return str;
    }

    let start = 0;
    let end = 1;
    let current = 0;
    let longest = 0;
    let len = str.length;

    while(end<len && start<end && start >= 0) {
        if(len%2 == 0) {
            if(str[start] == str[end]) {
                start--;
                end++
            }
        } else {

        }
    }
}

console.log(longestPalindrome(str));