// 1. Flatten Array 
// 2. Create Emitter
// 3. Optimize a function 
// 4. Implement a simple Observable
// 5. Given two identical DOM trees (not the same one), 
// and a node from one of them find the node in the other one
// 6. Implement a simple store class with set(Node, value), 
// get(Node) and has(Node) methods, which store a given Nodes with corresponding values.
// 7. Explain the concept of ES6 Promises to a 5-year-old.
// 8. What are the advantages of using ES6 maps over objects? What about using ES6 sets over arrays?
// 9. Given a picture, how would you hide/show a child picture on hovering on this parent?
// 10. Given an input array and another array that describes a new index for each element, 
// mutate the input array so that each element ends up in their new index. 
// Discuss the runtime of the algorithm and how you can be sure there won't be any infinite loops.

//Answer 1
function flatten(arr, k=1) {
    let result = [];
    if(!Array.isArray(arr) || arr.length === 0) {
        throw Error('Invalid input');
    }

    function recurse(arr, k) {
        arr.forEach((elem) => {
            if(Array.isArray(elem) && k>0) {
                recurse(elem, k-1);
            } else {
                result.push(elem);
            }
        })
    }
    recurse(arr, k);
    return result;
}

let arr = [[1,2],[3],[4,[5,6, [9,10]]],7,8];
console.log(flatten(arr, 3));


// Answer for 2
/*
You are asked to create an Event Emitter Class

const emitter = new Emitter()
It should support event subscribing

const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)

// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1)
emit(eventName, ...args) is used to trigger the callbacks, with args relayed

emitter.emit('event1', 1, 2);
// callback1 will be called twice
Subscription returned by subscribe() has a release() method that could be used to unsubscribe

sub1.release()
sub3.release()
// now even if we emit 'event1' again, 
// callback1 is not called anymore

*/
class Emitter {
    constructor() {
        this.map = {};
    }

    subscribe(name, callback) {
        if(this.map[name]) {
           this.map[name].push(callback);
        } else {
            this.map[name] = [callback];
        }
        let context = this;
        return {
            release : function() {
                context.map[name] = context.map[name].filter(elem => elem !== callback);
            }
        }
    }

    emit(name, ...args) {
        if(this.map[name]) {
            this.map[name].forEach((callback) => {
                callback.apply(this, args);
            })
        }
    }
}



//Answer for 10
var arr = ["a","b","c","d","e","f"];
var indices = [2, 3, 4, 0, 5, 1];

arr = indices.map((elem, index) => arr[indices.indexOf(index)]);
console.log(arr);