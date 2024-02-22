type StrOrUndefined = string | undefined
type PersonT = {
    firstName: StrOrUndefined;
    lastName: string;
    age: number;
}

let personObj1: PersonT = {
    firstName: 'Prashant',
    lastName: 'Gunjal',
    age: 32
};

personObj.firstName;

let personsArr1: Person[] = [
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


let tileElem = document.getElementById('title');

if(tileElem !== null){
    tileElem.innerHTML = '<span style="color:red"> Hi </span>';
}else{
    //Log error
}