
Promise.prototype.myAll = function(promises) {
    if(promises.length === 0) {
        Promise.resolve([]);
    }
    let _promises = promises.map((promise) => promise instanceof Promise ? promise : Promise.resolve(promise) );

    _promises.forEach((promise, i , arr) => {
        let result = [];
        promise.then((value) => {
            result[i] = value;
            if(i === arr.length -1) {
                resolve(result);
            }
        }, (error) => {
            reject(error);
        })
    });
}    