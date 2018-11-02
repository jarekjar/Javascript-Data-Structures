var LinkedList = function(){
    this.head = this.tail = null;
    this.count = 0;
}

LinkedList.prototype.addToFront = function(node){
    var temp = this.head;
    this.head = node;
    this.head.next = temp;
    this.count++;
    if(this.count == 1){
        this.tail = this.head;
    }
}

LinkedList.prototype.addToBack = function(node){
    if(this.count == 0){
        this.head = node;
    }
    else{
        this.tail.next = node;
    }

    this.tail = node;
    this.count++;
}

var ListNode = function(value){
    this.value = value;
    this.next = null;
}

var testNode1 = new ListNode(5);
var testNode2 = new ListNode(4);
var testNode3 = new ListNode(3);
var testNode4 = new ListNode(2);
var testNode5 = new ListNode(1);

var list = new LinkedList();


list.addToFront(testNode3);
list.addToFront(testNode4);
list.addToFront(testNode5);
list.addToBack(testNode2);
list.addToBack(testNode1);

console.log(list);

