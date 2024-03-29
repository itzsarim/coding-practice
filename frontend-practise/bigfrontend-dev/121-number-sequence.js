// Here is a sequence:

// '1', first number is 1
// '11', since previous number has One(1) 1
// '21', since previous number has Two(2) 1s
// '1211', since previous number has One(1) 2 and One(1) 1
// '111221', since previous number has One(1) 1, One(1) 2, Two(2) 1s
// '312211', since previous number has Three(3) 1s, Two(2) 2s, One(1) 1
// ....
// As explained above, the sequence is generated by counting the digits of previous number.

// Please create getNthNum(n) to return the n-th number string in the sequence, n starts from 1.

function getNthNum(n) {
    let nthNum = '1';
    let i=0;
    while(i<n-1) {
        nthNum = computeNum(nthNum);
        i++;
    }

   function computeNum(num) {
        let result = ''
        for(let i=0; i < num.length; ++i) {
            let count = 1;
            while(i+1<num.length && num[i+1]===num[i]) {++i; ++count};
            result += count + '' + num[i];
        }
        return result;
    }
    return nthNum;
}

console.log(getNthNum(100));