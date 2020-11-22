var longestPalindrome = function(s) {
    if (s.length <= 1) return s
    let longest = '', len = s.length
    
    function oneLetterStart (idx) {
        let head = idx, tail = idx
        while (head >= 0 && tail <= len - 1) {
            let subStr = s.substring(head, tail + 1)
            if (s[head] !== s[tail]) break
            if (subStr.length > longest.length) longest = subStr
            head -= 1
            tail += 1
        }
    }
    function twoLetterStart (idx1, idx2) {
        let head = idx1, tail = idx2
        while (head >= 0 && tail <= len - 1) {
            const subStr = s.substring(head, tail + 1)
            if (s[head] !== s[tail]) break
            if (subStr.length > longest.length) longest = subStr
            head -= 1
            tail += 1
        }
    }
    
    for (let i = 0; i < len; i++) oneLetterStart(i)
    for (let i = 0; i < len - 1; i++) twoLetterStart(i, i+1)
    
    return longest
};

console.log(longestPalindrome('abbd'));