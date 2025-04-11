const student = {
  name: 'Hamid',
  age: 33,
  enrolled: true,
  courses: ['JS', 'web Programming', 'Database'],
  getInfo: function () {
    return `${this.name} is ${this.age} years old and ${
      this.enrolled ? 'enrolled' : 'not enrolled'
    } in ${this.courses.length} course(s).`;
  },
};

console.log('Name:', student.name);
console.log('Age:', student.age);

console.log(student.getInfo());

//Part 2
//Convert the student object to a JSON string
const jsonString = JSON.stringify(student);
console.log('JSON String:', jsonString);

//Convert the JSON string back to a JavaScript object
const newStudent = JSON.parse(jsonString);
console.log('Converted Back to Object:', newStudent);

//Part 3
const { name, courses } = student;

console.log('Destructured Name:', name);
console.log('Destructured Courses:', courses);
