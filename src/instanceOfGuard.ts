//oop : instance of  type guard narrowing

class Person{
    name:string;

    constructor(name:string){
        this.name=name;
    }
    getSleep(numOfHours:number){
        console.log(`${this.name} ${numOfHours} ghumay`)
    }
}

class Student extends Person{
     
    constructor(name:string){
        super(name);
    }

    doStudy(numOfHours:number){
    console.log(`${this.name}  doinnk ${numOfHours} ghonta study kore `)
}
}

class Teacher extends Person{

    constructor(name:string){
        super(name);
    }

    takeClass(numOfHours:number){

        console.log(`${this.name} dhoinik ${numOfHours} ghonta class ney`)
    }
}

//function guard
const isStudent=(user:Person)=>{
    return user instanceof Student; //true false
}

const isTeacher=(user:Person)=>{
    return user instanceof Teacher;
}


const getUserInfo=(user:Person)=>{

//  if(user instanceof Student){
//     user.doStudy(10)
//  }

 if(isStudent(user)){
    user.doStudy(10)
 }

 else if(isTeacher(user)){
    user.takeClass(5);
 }
 else{
    user.getSleep(15)
 }
};

const student1= new Student("Mr.student");
const teacher1=new Teacher('Mr.Teacher');
const person=new Person('Mr.Person');

getUserInfo(person);