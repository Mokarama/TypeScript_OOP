//oop - class - object

class Animal{
    name: string;
    species:string;
    sound:string;

    constructor(name:string, species:string, sound:string){
        this.name=name
        this.species=species
        this.sound=sound
    }
    //
    makeSound(){
        console.log(`The ${this.name} is making sound ${this.sound}`);
    };
};

const dog=new Animal('dogesh bhai', 'dog', 'Ghew ghew');

console.log(dog.name);
dog.makeSound();

///parameter properties

class Animal1{
    name:string;
    species:string;
    sound:string;

    constructor(name:string, species:string, sound:string){
        this.name=name;
        this.species=species;
        this.sound=sound;
    };
    makeSound1(){
        console.log(`This is ${this.name} sound is ${this.sound}`)
    }
};

const cat=new Animal1('cat', 'White', 'maw maw');
console.log(cat);
cat.makeSound1();


