//oop - class - object


/*class Animal{
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
//    public name:string;
//    public species:string;
//    public sound:string;

    constructor(public name:string, public species:string, public sound:string){
        // this.name=name;
        // this.species=species;
        // this.sound=sound;
    };
    makeSound1(){
        console.log(`This is ${this.name} sound is ${this.sound}`)
    };
};

const cat=new Animal1('cat', 'White', 'maw maw');
console.log(cat);
cat.makeSound1();
*/


//Car -practice




class Car {
    // brand:string;
    // model:string;
    // price:number;
    // color:string;

    constructor(public brand: string, public model: string, public price: number, public color: string) {
        // this.brand=brand;
        // this.model=model;
        // this.price=price;
        // this.color=color;
    }
    getProducts() {
        console.log(`This is car.${this.brand}`)
    }
};

const carProducts = new Car('Yemaha', '3BD', 3400000, 'black');

console.log(carProducts);
carProducts.getProducts()