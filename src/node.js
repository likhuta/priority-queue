class Node {
	constructor(data, priority) {
    this.data=data;
    this.priority=priority;
    this.parent=null;
    this.left =null;
    this.right=null;

	}

	appendChild(node) {
   if(!!this.left){
     this.right=node;
   }
   this.left=node;

//  if(node.priority>this.priority && this.left!=false){
//    this.right=node;
//  }
//   if(node.priority<this.priority || this.right==null){
//     this.left=node;
//   }

	}

	removeChild(node) {

	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
