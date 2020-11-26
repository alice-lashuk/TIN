class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setFullName(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

class Student extends Person{
    constructor(firstName, lastName, id, grades) {
        super(firstName,lastName)
        this.id = id;
        this.grades = grades;
    }

    printStudent() {
        console.log(this.getFullName() + " " + this.getAvg())
    }

    getAvg() {
        return this.grades.reduce((a,b) => a + b, 0) / this.grades.length
    }
}

let me = new Student("Alice", "Lashuk", "s19229", [5,4,5,5,3])
me.printStudent()
me.setFullName("Name", "Surname")
me.printStudent()
