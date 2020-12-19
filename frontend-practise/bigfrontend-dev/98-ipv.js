function isValidIP(str) {
    // your code here
    
    // check if ipv4
    let ipv4 = str;
    let ipv6 = str;
    let octet = ipv4.split('.');
    let hextet = ipv6.split(':');
    if(octet.length>=1) {
      // this is ipv4
      function leadingZeros(num) {
        return num[0]== '0' && num[1];
      }
      for(let i=0; i<octet.length;i++){
        if(leadingZeros(octet[i])) {
            return false;
          }
          if(Number.parseInt(octet[i])<0 || Number.parseInt(octet[i]) >255 ){
            return false;
          }
      }
    }
    // check if ipv6
    if(hextet.length>=1) {
        var hexadecimal = function(num) {
            if(num.length != 4) {
              return false;
            }
            return true;
          }
      // this is ipv4
      for(let i=0; i<hextet.length;i++) {
        if(!hexadecimal(hextet[i])) {
            return false;
        }
      }
    }
    return true;
  }

  console.log(isValidIP('0.22.33.255'));