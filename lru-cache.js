const ll = require('./linked-list');
class LRUCache{
    constructor(capacity) {
        this.capacity = capacity;
        this.list = new ll();
        this.hashtable = {};
    }

    /* reads the value from the cache. removes it from the list and adds it to the front of the list
    * @param {*} the value to read
    * @return {*} value
    * */
    read(key) {
        if (this.hashtable[value]) {
            let value;
            this.list.delete(value);
            this.list.append(value);
            value = this.hashtable[key].value;
            this.hashtable[key] = this.list.tail;
            return value;
        }
    }

    /* write to a cache, append to end if space, else remove lru and append
    * @param {number, *} key and value to be added
    * 
    * */
    write(key, value) {
        let listArray = this.list.toArray();
        if(this.capacity > listArray.length) {
            this.list.append(value);
            this.hashtable[key] = this.list.tail;
        } else {
            this.list.delete(this.list.head);
            this.list.append(value);
            this.hashtable[key] = this.list.tail;
        }
    }
}

let cache = new LRUCache(5);