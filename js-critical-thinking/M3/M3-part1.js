// stateless vs stateful



const counter = {
    count: 0,

    add(amount) {
        this.count = this.count + amount;
    },

    print() {
        console.log(this.count)
    }
};

counter.add(1);
counter.add(2);
counter.print();