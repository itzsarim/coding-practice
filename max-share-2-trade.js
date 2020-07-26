/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max_till_i = [];
    var max_from_i = [];
    var max_trade = 0;
    
    // max trade with one trade
    function max_1_trade(subarr) {
        var min_so_far = Infinity;
        var max_diff = 0;
    
        for(var i=0;i<subarr.length;i++) {
            min_so_far = Math.min(min_so_far, subarr[i]);
            max_diff = Math.max(max_diff, subarr[i] - min_so_far);
        }
        return max_diff;
    }
    
    // make max till i array
    var subarrtill, subarrfrom;
    for(var j=0;j<prices.length;j++) {
        subarrtill = prices.slice(0,j+1);
        max_till_i.push(max_1_trade(subarrtill));
        subarrfrom = prices.slice(j);
        max_from_i.push(max_1_trade(subarrfrom));
    }
    
    // find max multiple trades
    for(var l=0;l<prices.length;l++) {
        if(l+1 >=prices.length) {
            max_trade = Math.max(max_trade, max_till_i[l]);
        } else {
            max_trade = Math.max(max_trade, max_till_i[l] + max_from_i[l+1]);
        }
        
    }
    return max_trade;
};

console.log(maxProfit([1,2,3,4,5]));