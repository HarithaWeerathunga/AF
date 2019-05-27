class Person {
    constructor(name){
        this.name = name;
    }
    describe(){
        return 'Person named' + this.name;
    }
}

const jane = new Person('Jane');
assert.equal(jane.describe(), 'Person Named Jane');

