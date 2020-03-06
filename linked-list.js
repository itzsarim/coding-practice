const LinkedListNode = require('./linked-list-node');

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  getHead() {
      return this.head;
  }

  getTail() {
      return this.tail;
  }
  
  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    let node = new LinkedListNode(value);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

    /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const node = new LinkedListNode(value);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;

  }
  /**
   * @param {*} value
   * @return {LinkedList}
   */
  delete(value) {
    if(!this.head) {
      return this;
    }
    if(this.head.value === value) {
      this.head = this.head.next;
      return this;
    }
    if(this.head.next) {
      let pointer1 = this.head.next;
      let pointer2 = this.head;
  
      while(pointer1) {
        if(pointer1.value === value) {
          pointer2.next = pointer1.next;
          pointer1 = null; //so that its Garbage collected
          break;
        } else {
          pointer1 = pointer1.next;
          pointer2 = pointer2.next;
        }
      }
      return this;
    } else {
      return this;
    }

  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find(value) {

  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {

  }

    /**
   * @return {LinkedListNode}
   */
  deleteHead() {

  }

    /**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach(value => this.append(value));

    return this;
  }

    /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

   /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {
    if(!this.head) {
      return this;
    }

    let prev = null;
    let current = this.head;
    let next = null;

    while(current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }

  /*
  * Checks if the input list is palindrome or not
  * @returns boolean
  */

  isPalindrome() {
    let prev = null;
    let slow = this.head;
    let fast = this.head;
    let next;

    while(fast) {
      fast = fast.next;
      next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
      if(fast) {
        fast = fast.next;
      }
    }

    if(prev.value !== slow.value) {
      prev = prev.next;
    } 
  
    while(prev && slow) {
      if(prev.value !== slow.value) {
        return false;
      }
      prev = prev.next;
      slow = slow.next;
    }

    if(prev === null && slow === null) {
      return true;
    }
    return false;
  }
}

module.exports = LinkedList;

const palinll = new LinkedList();
palinll.append('K').append('A').append('Y').append('A').append('K');
console.log(palinll.toString());
console.log(palinll.isPalindrome() ? 'string is palindrome' : 'string is not palindrome');