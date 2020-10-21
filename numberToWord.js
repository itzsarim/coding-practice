/**
 * 
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    
    var lv1 = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    var lv2 = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    var lv3 = "hundred";
    var lv4 = "thousand million billion".split(" ");
    
    var comma = 0;
    var result = [];
    while(num > 0) {
        // break it into 1000's so that u can just add the hundred's english words
        var n = num % 1000;
        var num = Math.floor(num/1000);
        var words = [];
        
        if(n > 99) {
            words.push(lv1[Math.floor(n/100)]);
            words.push(lv3);
            n = n%100;
        }
        
        if(n > 19) {
            words.push(lv2[Math.floor(n/10) - 2]);
            n = n%10;
        }
        
        if(n > 0) {
            words.push(lv1[n]);
        }

        if(words.length > 0) {
            if(comma > 0) {
                words.push(lv4[comma-1]);
            }
            result.push(words.join(" "));
        }
        
        comma++;
    }
    if(result.length > 0) {
        return result.reverse().join(" ");
    }
    return "Zero";
};


console.log(numberToWords(23455));