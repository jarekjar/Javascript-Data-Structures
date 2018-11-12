class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = this.left = null;
    }

    add(node, value) {
        
        let newNode = new TreeNode(value);
        if(value < node.value){
            if(!node.left){
                node.left = newNode;
            }
            else{
                this.add(node.left, value);
            }
        }
        else{
            if(!node.right){
                node.right = newNode;
            }
            else{
                this.add(node.right, value);
            }
        }
    }
}

let root = new TreeNode(7);
console.log(root);
root.add(root, 2);
root.add(root, 1);
root.add(root, 3);
root.add(root, 9);
root.add(root, 13);
root.add(root, 8);
root.add(root, 25);
root.add(root, 10);
root.add(root, 4);
root.add(root, 7);
root.add(root, 11);
console.log(root);

