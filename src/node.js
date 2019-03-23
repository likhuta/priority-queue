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
    /*
      if(this.parent==null  ){

    }
    if(this.parent!=null ){
      //родитель того, с кем хотят поменять местами
      let totalParent=this.parent.parent;

      // с которым хотят меняться 
      let currentNodeParent=this.parent;

      // текущий элемент,   предполагаемый родитель
      let currentNode=this;
      
      // left & right  того, с кем хотят поменяться
      let totalParentLeft=this.parent.left;
      let totalParentRight=this.parent.right;

      //left & right  того, который меняется
      let currentNodeLft=this.left;
      let currentNodeRight=this.right;

      if(currentNodeParent.left!=null && currentNodeParent!=null){
        if(this==totalParentRight){
          this.left=totalParentLeft;
          this.right=currentNodeParent;
          totalParentLeft.parent=currentNode;
  
  
        }
        if(this==totalParentLeft){
          this.left=currentNodeParent;
          this.right=totalParentRight;
          totalParentRight.parent=currentNode;
  
  
        }
  

      }


      totalParent=this;
      currentNodeParent=totalParent;
      */

    if(this.parent==null  ){

    }
    if(this.parent!=null ){
     //родитель того, с кем хотят поменять местами
     let totalParent=this.parent.parent;

     // с которым хотят меняться 
     let currentNodeParent=this.parent;

     // текущий элемент,   предполагаемый родитель
     let currentNode=this;
     
     // left & right  того, с кем хотят поменяться
     let totalParentLeft=this.parent.left;
     let totalParentRight=this.parent.right;

     //left & right  того, который меняется
     let currentNodeLft=this.left;
     let currentNodeRight=this.right;

     if(currentNodeParent.left!=null && currentNodeParent!=null){
       if(this==totalParentRight){
         this.left=totalParentLeft;
         this.right=currentNodeParent;
         totalParentLeft.parent=currentNode;
 
 
       }
       if(this==totalParentLeft){
         this.left=currentNodeParent;
         this.right=totalParentRight;
         totalParentRight.parent=currentNode;
 
 
       }
 

     }

      this.parent.parent=this;
      this.parent=totalParent;





    }
		
	}
}

// const child  = new Node(15, 42);
// 			const parent  = new Node(42, 15);

// 			parent.appendChild(child);
// 			child.swapWithParent();


module.exports = Node;
