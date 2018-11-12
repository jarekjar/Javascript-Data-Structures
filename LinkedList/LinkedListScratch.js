//implement linked list from scratch here
class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    addToFront(value) {
        let temp = this.head;
        this.head = value;
        this.head.next = temp;
        this.count++;
        if(this.count == 1){
            this.tail = this.head;
        }
    }
}

class ListNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const list = new LinkedList();

list.addToFront(node1);
list.addToFront(node2);
console.log(list);