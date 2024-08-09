class School{
    name:string
    students:Student[]=[]
    teachers:Teacher[]=[]

    constructor(name:string){
        this.name=name
    }
    addstudent(stdObj:Student){
        this.students.push(stdObj)
    }
    addTeacher(teaObj:Teacher){
        this.teachers.push(teaObj)
    }
}

class Student{
    name:string;
    age:number;
    schoolName:string
    constructor(name:string,age:number,schoolName:string){
        this.name=name
        this.age=age
        this.schoolName=schoolName
    }
}

class Teacher extends Student{
    email:string=""
    contact:string=""
    addInfo(email:string,contact:string){
        this.email=email
        this.contact=contact
    }
}

let school1 = new School("Educator")
let school2 = new School("Toodler")

let s1 = new Student("sara",30,school1.name)
let s2 = new Student("hina",23,school2.name)

let t1 = new Teacher("Tooba",50,school1.name)
let t2 = new Teacher("Areeba",55,school2.name)

t1.addInfo("abc@abc.com","1234567")
t2.addInfo("jkl@jkl.com","0987654")

school1.addstudent(s1)
school2.addstudent(s2)
school1.addTeacher(t1)
school2.addTeacher(t2)


console.log(school1)
console.log(school2)