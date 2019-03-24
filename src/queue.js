const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
    if(maxSize){
      this.maxSize=maxSize

    }
    else{
      this.maxSize=30

    }
    this.heap= new MaxHeap();

	}

	push(data, priority) {
    this.heap.push(data, priority)
	}

	shift() {
    this.heap.pop()
	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
