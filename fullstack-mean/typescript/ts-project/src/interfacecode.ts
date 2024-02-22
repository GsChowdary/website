interface Person{
    firstName: string | undefined;
    lastName: string;
    age: number;
    // print: ()=> string;
}

let personObj: Person = {
    firstName: 'Prashant',
    lastName: 'Gunjal',
    age: 32
};

personObj.firstName;

let personsArr: Person[] = [
    {
        firstName: 'Prashant',
        lastName: 'Gunjal',
        age: 32
    },
    {
        firstName: 'Prashant',
        lastName: 'Gunjal',
        age: 32
    }
];
