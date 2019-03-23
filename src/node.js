class Node {
	constructor(data, priority) {
    this.data=data;
    this.priority=priority;
    this.parent=null;
    this.left =null;
    this.right=null;

	}

	appendChild(node) {

    if(this.left!=null && this.right==null){
      this.right=node;
      node.parent=this;
    }
    if(this.left==null && this.right==null){
      this.left=node;
      node.parent=this;

    }
    /*
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
*/

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
     //родитель того, с кем хотят поменять местами
     let totalParentParent=this.parent.parent;

     // с которым хотят меняться 
     let currentNodeParent=this.parent;

     // текущий элемент,   предполагаемый родитель
     let currentNode=this;
     
     // left & right  того, с кем хотят поменяться
     let totalParentLeft=this.parent.left;
     let totalParentRight=this.parent.right; //=null

     //left & right  того, который меняется
     let currentNodeLft=this.left;
     let currentNodeRight=this.right;

     if(currentNodeParent.left!=null || currentNodeParent.right!=null){

      if(this==totalParentLeft){
        this.left=currentNodeParent;
        this.right=totalParentRight;
      
        if(this.parent.parent!=null &&  this.parent.parent.left==currentNodeParent ){
          this.parent.parent.left=currentNode;
        }
        if(this.parent.parent!=null &&  this.parent.parent.right==currentNodeParent ){
          this.parent.parent.right=currentNode;
        }
        if(totalParentRight){
          totalParentRight.parent=currentNode;

        }
      }

       if(this==totalParentRight){
         this.left=totalParentLeft;
         this.right=currentNodeParent;
        if(totalParentLeft){
          totalParentLeft.parent=currentNode;

        }
       }

       currentNodeParent.left=currentNodeLft;
       currentNodeParent.right=currentNodeRight;
     }
     
   
      this.parent.parent=this;
      this.parent=totalParentParent;
    }
		
	}
}

// const root = new Node(15, 42);
// const left = new Node(42, 15);
// const right = new Node(13, 42);
// const childOfLeft = new Node(13, 34);
// const childOfRight = new Node(0, 1);

// root.appendChild(left);
// root.appendChild(right);
// left.appendChild(childOfLeft);
// right.appendChild(childOfRight);

// childOfLeft.swapWithParent();
// childOfRight.swapWithParent();

//       console.log(root)



module.exports = Node;
