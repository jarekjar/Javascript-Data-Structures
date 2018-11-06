class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }

    length(){
        return this.count;
    }

    push(item){
        this.items.push(item);
        this.count++;
    }

    pop(){
        if(this.count > 0){
            this.count--;
        }
        return this.items.pop();
    }

    peek(){
        return this.items.slice(-1)[0];
    }

    enum(){
        return this.items;
    }
}

let stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.enum());
console.log(stack.pop());
console.log(stack.enum());
console.log(stack.pop());
console.log(stack.enum());