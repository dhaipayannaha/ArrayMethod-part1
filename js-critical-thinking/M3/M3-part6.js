class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const head = new node(10);
head.next = new node(20);
head.next.next = new node(30);


let temp = head;
while(temp !== null){
    console.log(temp.value, " -> ");
    temp = temp.next;
}