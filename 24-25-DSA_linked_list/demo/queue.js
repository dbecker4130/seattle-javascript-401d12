'use strict';

const Sll = require('./singly-linked-list.js');

module.exports = Queue;

function Node(val) {
  this.val = val;
  this.next = null;
}

function Queue() {
  this.sll = new Sll();
}


Queue.prototype.dequeue = function() {

  if(this.head) {
    let current = this.head;
    this.head = current.next;
    return current.val;
  }
};

// Queue.prototype.enqueue = function(val) {
//   this.sll.append(val);
// };

Queue.prototype.enqueue = function(val) {
  let node = new Node(val);

  if(!this.head) {
    this.head = node;
    this.tail = node;
    return;
  }

  this.tail.next = node;
  this.tail = node;

  return;
};
