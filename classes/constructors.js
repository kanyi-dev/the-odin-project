function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.hasJob = false;

  this.fullName = function () {
    return `this.firstName this.lastName`;
  };

  this.setFirstName = (firstName) => {
    this.firstName = firstName;
  };

  this.setLastName = (lastName) => {
    this.lastName = lastName;
  };
}

let person1 = new Person("Nick", "Maina");

console.log(person1.firstName, person1.hasJob, person1.lastName);
