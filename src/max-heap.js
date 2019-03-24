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
    if (this.root==null){

    }
    if (this.root!=null){
      this.detachRoot();
    }

		
	}

	detachRoot() {
      let arrAfterDetach=this.parentNodes.filter(item=>{
        return item!=this.root;
      })
      this.parentNodes=arrAfterDetach;
      let copyRoot=this.root;
      this.root=null;
      return copyRoot
     
	}

	restoreRootFromLastInsertedNode(detached) {
    let last=this.parentNodes[this.parentNodes.length-1];
    this.root=last;
   
    this.root.left=detached.left;
    this.root.right=detached.right;
    this.root.left.parent=this.root;
    this.root.right.parent=this.root;
    // this.root.parent=null;
    last.parent.removeChild(last)
	}

	size() {
		
	}

	isEmpty() {
		if(this.root==null){
      return true
    }
    else{
      return false
    }
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
