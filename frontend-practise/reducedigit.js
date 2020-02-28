function createCheckDigit(membershipId) {
    // Write the code that goes here.
    let sum = 0;
    let result = 0;
    if(membershipId) {
      for(var i=0;i<=membershipId.length-1;i++) {
          sum = sum + parseInt(membershipId[i]);
      }
      if(sum.toString(10).length!==1) {
        result =  createCheckDigit(sum.toString(10))
      } else {
        result =  sum;
      }
    }
    return result;
  }
  
  console.log(createCheckDigit("55555"));