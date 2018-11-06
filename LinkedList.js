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

LinkedList.prototype.removeLast = function(){
    if(this.count != 0){
        if(this.count == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            var current = this.head;
            while(current.next != this.tail){
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.count--;
    }
}

LinkedList.prototype.removeFirst = function(){
    if(this.count != 0){
        this.head = this.head.next;
        this.count--;
        if(this.count == 0){
            this.tail = null;
        }
    }
}

LinkedList.prototype.remove = function (node) {
    debugger;
    if(this.count != 0){
        var current = this.head;
        if(current.value == node){
            this.head = this.head.next;
            this.count--;
            return;
        }
        while(current.value != node && current){
            current = current.next;
        }
        if(current){
            current = current.next.next;
            this.count--;
        }
    }
}

LinkedList.prototype.enumerate = function(){
    var result = [];
    var current = this.head;
    while(current != null){
        result.push(current.value);
        current = current.next;
    }
    return result;
}

LinkedList.prototype.find = function(n){
   var current = this.head;
   while(current != null){
       if(current.value == n){
           return current;
       }
       else{
           current = current.next;
       }
   }
   return undefined;
}

LinkedList.prototype.swap = function(x,y){
    if(x == y){
        return;
    }
    var prevX = null;
    var currX = this.head;
    while(currX && currX.value != x){
        prevX = currX;
        currX = currX.next;
    }
    var prevY = null;
    var currY = this.head; 
    while(currY && currY.value != y){
        prevY = currY;
        currY = currY.next;
    }
    if(!currX || !currY){
        return;
    }
    if(prevX){
        prevX.next = currY;
    }
    else{
        this.head = currY;
    }
    if(prevY){
        prevY.next = currX;
    }
    else{
        self.head = currX;
    }
    var temp = currX.next;
    currX.next = currY.next;
    currY.next = temp;
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
var testNode6 = new ListNode(-1);
var list = new LinkedList();


list.addToFront(testNode3);
list.addToFront(testNode4);
list.addToFront(testNode5);
list.addToBack(testNode2);
list.addToBack(testNode1);
list.addToFront(testNode6);

console.log("Initial List:", list.enumerate());

list.removeLast();
console.log("Remove last: ", list.enumerate());

list.removeFirst();
console.log("Remove First:", list.enumerate());

console.log("Find Node containing 3:", list.find(3));

list.swap(1,4);
console.log("swap 1 and 4", list.enumerate());

list.remove(2);
console.log("remove 4", list.enumerate());


