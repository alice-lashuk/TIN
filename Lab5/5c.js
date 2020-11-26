const student =  {
    courses: ["IT","PE"]
}

function CreateFromPrototype(firstName, LastName, id) {
    let newStudent = Object.create(student)
    newStudent.firstName = firstName
    newStudent.LastName = LastName
    newStudent.id = id
    return newStudent
}

const test = CreateFromPrototype("Alice", "Lashuk", "s19229")
console.log("Name: " + test.firstName)
console.log("Surname: " + test.LastName)
console.log("id: " + test.id )
console.log("Cources: " + test.courses)