const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {

  st = [];

  push(elem) {
    let a = this.st.length;
    this.st[a]=elem;
  }

  pop() {
    let a = this.st.length;
    let b = this.st.splice(a-1,a);
    return b[0];
  }

  peek() {
    let a = this.st.length - 1;
    return this.st[a];
  }
}
