const Node = require('./node');

class MaxHeap {
	constructor() {
    this.root=null;
    this.parentNodes=[];
	}

	push(data, priority) {
    let node=new Node(data, priority);
    this.insertNode(node);
    this.shiftNodeUp(node)
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
		this.root=null;
    this.parentNodes=[];
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
    let totalParentNode=node.parent
    if(node.parent==null){
      this.root=node;
    }
		if(totalParentNode!=null && totalParentNode.priority<node.priority){
      let toUpNode=node;
      let toDownNode=node.parent
      for(let i=0; i<=this.parentNodes.length-1; i++){

        if(this.parentNodes[i].data==node.parent.data){
          this.parentNodes[i]=toUpNode;
          continue;
         
        }
        if(this.parentNodes[i].data==node.data){
          this.parentNodes[i]=toDownNode;

        }
      }
      node.swapWithParent();
      this.shiftNodeUp(node)
    
  
    }
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
