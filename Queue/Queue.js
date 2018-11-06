class Queue {
    constructor(){
        this.items = [];
        this.count = 0;
    }

    add(value){
        this.items.push(value);
    }

    remove(){
        return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    enum(){
        return this.items;
    }
}

let q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.add(5);
console.log(q.enum());
q.remove();
q.remove();
console.log(q.enum());