class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  constructor(firstName, lastName, identification, scores) {
    super(firstName, lastName, identification);
    this.scores = scores;
  }

  calculate() {
    let sum = 0;
    let avg = 0;
    let grade;

    for (let i = 0; i < this.scores.length; i++) {
      sum = sum + this.scores[i];
    }

    if (this.scores.length != 0) {
      avg = sum / this.scores.length;
    }
    if (avg >= 90 && avg <= 100) grade = "O";
    else if (avg >= 80 && avg < 90) grade = "E";
    else if (avg >= 70 && avg < 80) grade = "A";
    else if (avg >= 55 && avg < 70) grade = "P";
    else if (avg >= 40 && avg < 55) grade = "D";
    else if (avg < 40) grade = "T";

    return grade;
  }
}

let s = new Student("Praveen", "Selva", "a403511", [
  34,
  45,
  56,
  23,
  79,
  99,
  89,
]);

s.calculate();
