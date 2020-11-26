function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    this.printStudent = function() {
        let avg = this.grades.reduce((a,b) => a + b, 0) / this.grades.length
        console.log("First Name: " + this.firstName + " Last Name: " + this.lastName + " Average: " + avg)
    }
  }

  let me = new Student("Alice", "Lashuk", "s19229", [5,4,5,5,3])
  me.printStudent()