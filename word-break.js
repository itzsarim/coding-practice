function wordBreakUtil(word, dict, start, result) {
    if(start === word.length) {
        return true; // since you reached the end that means you found words till here
    }
    let str = '';
    while(start<word.length) {
        str+=word[start];
        if(dict.includes(str)) {
            result[start] = str;
            if(wordBreakUtil(word,dict,start+1,result)) {
                return true;
            } else {
                delete result[str];
            }
        }
        start++;
    }
    return false;
}

function wordBreak(word, dict) {
    let result = {};
    let found = wordBreakUtil(word, dict, 0,result);
    return found ? result : 'word cannot be broken';
} 

let word = 'ilikemangotango';
let dict = ['i','il','like','man','go','mango','tan','go','tango'];
console.log(wordBreak(word, dict));