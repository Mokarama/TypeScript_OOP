
class Parent{
     name:string;//common
    age:number;// common
    address:string;

    constructor(name:string, age:number, addess:string){

        this.name=name;
        this.age=age;
        this.address=addess;
    };

    //common
    getSleep(numOfHours:number){
        console.log(`${this.name} ${numOfHours} ghonta ghumay`)
    }
}





class Student extends Parent{};


const student1=new Student('Mr.Fakibaj', 35, 'Dhaka');


class Teacher extends Parent{
     designation:string;//ownproperties

     constructor(name:string, age:number , address:string, designation: string){

        super(name,age,address)
     this.designation=designation;
     };

};

const teacher1=new Teacher('Taslima', 38,'Bangladesh' ,'Senior Teacher');
teacher1.







/********************* */

/**
class Teacher{
    name:string; //common
     age:number;//common
     address:string; //common
     designation:string;//ownproperties

     constructor(name:string, age:number, address:string, designation: string){

        this.name=name;
        this.age=age;
        this.address=address;
        this.designation=designation;
     };

     //common

     getClass(numOfClass: number){
        console.log(`${this.name} ${numOfClass} ghonta ghumai`);
     }
};

const teacher1=new Teacher('Taslima', 38,'Bangladesh' ,'Senior Teacher');
teacher1.getClass(8);
 */