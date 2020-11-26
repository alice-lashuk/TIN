function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    this.printStudent = function() {
        console.log(this.getFullName() + " " + this.getAvg())
    }

    this.getAvg = function() {
        return this.grades.reduce((a,b) => a + b, 0) / this.grades.length
    }

    this.getFullName = function() {
        return this.firstName + " " + this.lastName
    }

    this.setFullName = function(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }
  }

  let me = new Student("Alice", "Lashuk", "s19229", [5,4,5,5,3])
  me.printStudent()
  me.setFullName("Name" , "Surname")
  me.printStudent()
