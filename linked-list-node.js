class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

module.exports = LinkedListNode;