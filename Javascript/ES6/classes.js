class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
  printName() {
    console.log(this, this.firstName, this.lastName);
  }
}

const abdou = new Student("Aoufi", "Abderahmane", 1999);
abdou.printName();
