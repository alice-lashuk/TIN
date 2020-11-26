class Student {
    constructor(firstName, lastName, id, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }

    printStudent() {
        console.log(this.getFullName() + " " + this.getAvg())
    }

    getAvg() {
        return this.grades.reduce((a,b) => a + b, 0) / this.grades.length
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }

    setFullName(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }
}

let me = new Student("Alice", "Lashuk", "s19229", [5,4,5,5,3])
me.printStudent()