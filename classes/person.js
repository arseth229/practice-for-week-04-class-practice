class Person {

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }





  
  introduce () {
    return console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople (people) {

    if (!Array.isArray(people)) {
      throw new Error(`introducePeople only takes an array as an argument.`);
    }

    for (const person of people) {
      if (!(person instanceof Person)) {
        throw new Error(`All items in array must be Person class instances.`);
      }
    }

    for (const person of people) {
      person.introduce();
    }

  }

    

}

const person = new Person(`kristen`, `chauncey`, 38);

person.introduce();



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}