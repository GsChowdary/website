class Car{
    readonly brand: string; // readonly
    private model: string; // same class
    protected author: string = 'PG'; // same class and child / sub classes
    public test: string = ''; // publically accessible

    constructor(b: string, m: string){
        this.brand=b;
        this.model=m;
    }

    print(): string{
        return `Car is of brand : ${this.brand} and model ${this.model}`;
    }
}

let car1 = new Car('BMW', 'X1');

car1.print();