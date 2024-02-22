"use strict";
class Car {
    constructor(b, m) {
        this.author = 'PG';
        this.test = '';
        this.brand = b;
        this.model = m;
    }
    print() {
        return `Car is of brand : ${this.brand} and model ${this.model}`;
    }
}
let car1 = new Car('BMW', 'X1');
car1.print();
