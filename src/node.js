class Node {
	constructor(data, priority) {
    this.data=data;
    this.priority=priority;
    this.parent=null;
    this.left =null;
    this.right=null;

	}

	appendChild(node) {
    console.log({...this})
  console.log({...node})

    if(this.left!=null && this.right!=null){
      
    }
    if(this.left!=null && this.right==null){
      if(node.priority>this.left.priority){
        this.right=node;
        node.parent=this;
      }
      else if(node.priority<this.left.priority){
        this.right=this.left;
        this.left=node;
        node.parent=this;

      }
    
    }
    if(this.left==null && this.right==null){
      this.left=node;
      node.parent=this;

    }


	}

	removeChild(node) {
    if(node!=this.left && node!=this.right){
      throw new Error('No have this  element')
     }
    if(node==this.left){
      this.left=null;
      node.parent=null;

    }
    if(node==this.right){
      this.right=null;
      node.parent=null;

    }

	}

	remove() {
    if(this.parent==null){

    }
   else{
     this.parent.removeChild(this)
   }


	}

	swapWithParent() {

    if(this.parent==null  ){

    }
    if(this.parent!=null ){
      console.log(this.priority )
      console.log(this.parent.priority )

      if(this.priority<this.parent.priority){
        console.log('eee')
        let totalParent=this.parent;
        // вызов чайлд
   this.parent.parent=this
      }

    }
		
	}
}

// const child  = new Node(15, 42);
// 			const parent  = new Node(42, 15);

// 			parent.appendChild(child);
// 			child.swapWithParent();


module.exports = Node;
