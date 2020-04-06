let gcd = (x,y) => {
    if(y==0) {
        return x;
    }
    return gcd(y, x%y);
}

console.log(gcd(156,24));