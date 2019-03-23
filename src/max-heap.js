const Node = require('./node');

class MaxHeap {
	constructor() {
    this.root=null;
    this.parentNodes=[];
	}

	push(data, priority) {
    let node=new Node(data, priority);
    this.insertNode(node)
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
    if(this.root!=null){
      this.parentNodes[0].appendChild(node)
      this.parentNodes.push(node)
    }
    if(this.root==null){
      this.root=node;
      this.parentNodes.push(node)
    }
    let newParentNode=this.parentNodes.filter(item=>{
      return (item.left==null || item.right==null)
    })
    this.parentNodes=newParentNode
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
