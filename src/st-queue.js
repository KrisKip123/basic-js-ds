const {
  NotImplementedError
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  list = null;
  current = null;

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    let res = [];
    if (this.getUnderlyingList()) {
      let a = this.list;
      while (a) {
        res.push(a.value);
        a = a.next;
      }
      res.push(value);
      this.list = convertArrayToList(res);
    } else {
      res.push(value);
      this.list = convertArrayToList(res);
    }

  }

  dequeue() {
    if (!this.getUnderlyingList()) {
      return null;
    } else {
      let res = [];

      let a = this.list;
      while (a) {
        res.push(a.value);
        a = a.next;
      }
      let end = res.shift(res);
      this.list = convertArrayToList(res);
      return end;
    }

  }



}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

function ListNode(x) {
  this.value = x;
  this.next = null;
}