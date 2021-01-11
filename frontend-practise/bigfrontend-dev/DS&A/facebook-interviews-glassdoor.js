// 1. Flatten Array 
// 2. Create Emitter
// 3. Optimize a function 
// 4. Implement a simple Observable
// 5. Given two identical DOM trees (not the same one), 
// and a node from one of them find the node in the other one
// 6. Implement a simple store class with set(Node, value), 
// get(Node) and has(Node) methods, which store a given Nodes with corresponding values.
// 7. Explain the concept of ES6 Promises to a 5-year-old. -- https://www.digitalocean.com/community/tutorials/javascript-promises-for-dummies
// 8. What are the advantages of using ES6 maps over objects? What about using ES6 sets over arrays?
// 9. Given a picture, how would you hide/show a child picture on hovering on this parent?
// 10. Given an input array and another array that describes a new index for each element, 
// mutate the input array so that each element ends up in their new index. 
// Discuss the runtime of the algorithm and how you can be sure there won't be any infinite loops.
// 11. Say you have 500 multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.
// Versions after first bad version are supposed to be all bad versions.
// notes
// Inputs are all non-negative integers
// if none found, return -1

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

// SOlutoon 3
let items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { color: 'blue', type: 'book', age: 17 }
]

// an exclude array made of key value pair
const excludes = [
    { k: 'color', v: 'silver' },
    { k: 'type', v: 'tv' }
]

function excludeItems(items, excludes) {
    return items.filter((item) => {
        let bool = true;
        for (let i = 0; i < excludes.length; i++) {
            let obj = excludes[i];
            if (item[obj.k] == obj.v) {
                bool = false;
                break;
            }
        }
        return bool;
    })
}

function excludeItemsOptimized(items, excludes) {
    // preprocess excludes
    // create a map with key as property and value as set of values with this property
    // eg:- {color: [red, silver], type: [tv, phone]}
    let excludesMap = new Map();
    excludes.forEach((obj) => {
        if(!excludesMap.has(obj.k)) {
            let set = new Set();
            excludesMap.set(obj.k, set.add(obj.v));
        } else {
            excludesMap.get(obj.k).add(obj.v);
        }
    })

    return items.filter((item) => {
        let bool = true;
        let keys = Object.keys(item); // ['color', 'type', 'age']
        for(let i=0; i< keys.length; i++) {
            if(excludesMap.has(keys[i])) {
                if(excludesMap.get(keys[i]).has(item[keys[i]])){
                    bool = false;
                    break;
                }
            }
        }
        return bool;
    })
}

// Solution 4. Implement a simple Observable
class Observable {
    constructor(observer) {
        this.observer = observer;
    }

    subscribe(subscriber) {
        let subscriberWrapper = {
            unsubscribed: false,
            next: function(value) {
                if(this.unsubscribed) return;
                if(subscriber instanceof Function) {
                    return subscriber(value);
                }
                return subscriber.next ? subscriber.next(value) : null;
            },
            error: function(error) {
                if(this.unsubscribed) return;
                this.unsubscribe();
                return subscriber.error ? subscriber.error(error) : null;
            },
            complete: function() {
                if(this.unsubscribed) return;
                this.unsubscribe();
                return subscriber.complete ? subscriber.complete() : null;
            },
            unsubscribe: function() {
                this.unsubscribed = true;
            }
        }
        this.observer(subscriberWrapper);
        return subscriberWrapper;
    }
}

//Solution 5
const findCorrespondingNode = (rootA, rootB, target) => {
    // your code here
    let stackA = [];
    let stackB = [];
    if(!rootA || !rootB || !target) {
      return null;
    }
    if(rootA === target) return rootB;
    
    stackA.push(rootA);
    stackB.push(rootB);
    
    while(stackA.length!==0) {
      let childA = stackA.pop();
      let childB = stackB.pop()
      if(childA === target) {
        return childB;
      }
      stackA.push(...childA.children);
      stackB.push(...childB.children);
    }
    return null;
  }


// Solution 6
class Node {

    constructor() {
        this.map = {};
    }

    set(node, value) {
        let __nodekey__ = Symbol();
        node.__nodekey__ = __nodekey__;
        this.map[__nodekey__] = value;
    }

    get(node) {
        return this.map[node.__nodekey__];
    }

    has(node) {
        return this.map[node.__nodekey__] ? true : false;
    }
}
// Answer 8
/*
MAp takes any key-type, as opposed to object taking only number/string/symbol
Map maintains order of its input, object doesnt.
map is an instaceof object but not vice versa


*/

//Answer for 10
var arr = ["a","b","c","d","e","f"];
var indices = [2, 3, 4, 0, 5, 1];

arr = indices.map((elem, index) => arr[indices.indexOf(index)]);
console.log(arr);

//inline solution for 10
let newIndex;
  let i=0;
  while(i<items.length) {
    newIndex = newOrder[i];
    if(i!=newIndex) {
      [items[i],items[newIndex]] = [items[newIndex], items[i]];
      [newOrder[i], newOrder[newIndex]] = [newOrder[newIndex], newOrder[i]];
    }
    i++;
  }

// Answer 11
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1
    let start = 1;
    let end = version;
    let mid;
    let currentans = -1;
    while(start <= end) {
      mid = start + Math.floor((end-start)/2);
      if(isBad(mid)) {
        currentans = mid;
        end = mid-1;
      } else {
        start = mid+1;
      }
    }
    return currentans;
  }
}