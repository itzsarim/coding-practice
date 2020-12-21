class LRU {
    constructor(limit) {
        this.limit = limit;
        this.map = {};
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    set(key, value) {
        let node = new Node(key,value);
         // check limit and delete tail
        if(this.length === this.limit) {
            this.remove(this.tail);
        }
        this.insert(node);
    }

    get(key) {
        if(this.map[key]) {
            let node = this.map[key];
            // bring this to front of queue
            this.remove(node)
            this.insert(node)
            return node.value;
        }
    }

    insert(node) {
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        this.map[node.key] = node;
    }

    remove(node) {
        if(node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }
        if(node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
        if(this.map[node.key])
        delete this.map[node.key];
        if(this.length!=0)
        this.length--;
    }

    print() {
        let current = this.head;
        let result = [];
        while(current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result);
    }

}

class Node {
    constructor(key,val) {
        this.value = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}


let lru = new LRU(3);
lru.set(1,1);
lru.set(2,2);
lru.set(3,3);
lru.set(5,5);
lru.print();
lru.get(1);
lru.print();
lru.set(5,5);
lru.set(6,6);
lru.set(7,7);
lru.print();