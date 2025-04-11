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

  addCourse: function (newCourse) {
    this.courses.push(newCourse);
    console.log(`Course "${newCourse}" added.`);
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
//Destructure numbers
const scores = [65, 85, 93, 72];
const [firstScore, secondScore] = scores;

console.log('First Score:', firstScore);
console.log('Second Score:', secondScore);

//Part 4
const clonedStudent = { ...student };
console.log('Cloned Student:', clonedStudent);

clonedStudent.graduationYear = 2025;
console.log('Graduation Year:', clonedStudent);

const newCourses = ['Operating Sys', 'Tech Writing'];
const allCourses = [...student.courses, ...newCourses];
console.log('All Courses:', allCourses);
