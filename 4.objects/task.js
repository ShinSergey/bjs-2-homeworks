function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
}
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  if (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}

let student3 = new Student("Sergei", "male", 29);
student3.addMark(5);
student3.addMarks(3, 2);
console.log(student3.getAverage());