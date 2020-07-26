var backspaceCompare = function(S, T) {
    var nS='', nT='';
    for(var i=0;i<S.length;i++) {
        if(S[i] === '#' && nS.length>=1) {
            nS = nS.slice(0,-1);
        } else {
            nS+=S[i];
        }
    }
    for(var j=0;j<T.length;j++) {
        if(T[j] === '#' && nT.length>=1) {
            nT = nT.slice(0,-1);
        } else {
            nT+=T[j]; 
        }
    }
    
    if(nS === nT) {
        return true
    }
    return false;
};

console.log(backspaceCompare('ad#b','ac#b'));