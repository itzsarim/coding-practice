var checkValidString = function(s) {
    var round = 0;
    var open = [];
    var close = [];
    var star = [];
    for(var i=s.length-1;i>=0;i--) {
        if(s[i] === ')') {
            round++;
            close.push(i);
        } else if (s[i] === '(') {
            round--;
            open.push(i);
        } else if (s[i] === '*') {
            star.push(i);
        }
    }

  if (round > 0) {
      var i=0,j=0;
      while(round!=0) {
          if(i==star.length) {
              break;
          }
          if(star[i]<close[j]) {
              i++;
              j++;
              round--;
          } else {
              i++;
          }
      }
  } else if(round < 0) {
      var i=0,j=open.length-1;
      while(round!=0) {
          if(i==star.length) {
              break;
          }
          if(star[i]>open[j]) {
              i++;
              j--;
              round++;
          } else {
              i++;
          }
      }
  }
  
  return round === 0 && s[0]!=')';
};

console.log(checkValidString('(())((())()()(*)(*()(())())())()()((()())((()))(*'));