let obj1 = {
    name: 'sarim',
    print: function(lastname) {
        console.log(this.name + ' ' + lastname);
    }
}
let obj2 = {
    name: 'nawaz'
}

//obj1.print.apply(obj2, ['zaidi']);


// Function.prototype.customApply = function(context, arr) {
//     let func = this;
//     let uniqueProp = Symbol();
//     context[uniqueProp] = func;
//     if(!arr) {
//         context[uniqueProp]();
//     } else {
//         context[uniqueProp](...arr);
//     }

//     delete context[uniqueProp];
// }

// Function.prototype.customApply = function(context, arr) {
//     let func = this;
//     let helper = Object.create(context);
//     helper.f = func;
//     if(!arr) {
//         helper.f();
//     } else {
//         helper.f(...arr);
//     }
// }

Function.prototype.customApply = function(context, arr) {
    return Object.create(context, { fn: {value : this} }).fn(...arr)
  };

obj1.print.customApply(obj2, ['pinjani']);