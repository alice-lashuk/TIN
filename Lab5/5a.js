let person = { 
    name: "Alice", 
    age: 19, 
    gender: "female",
    getGender: function(){
        return this.gender;
    },
    setAge: function(new_Age) {
        this.age = new_Age;
    }
  };

  function printFun(obj) {
    for(let prop in obj){
        value = obj[prop]
        type = typeof value
        if(type != "function") {
            console.log(prop + ": " + value)
        } else {
            console.log(prop)
        }
        console.log("Type: "+type)
        console.log("\n")
    }
  }

  printFun(person)

  person.setAge(20) 
  printFun(person) // check new age