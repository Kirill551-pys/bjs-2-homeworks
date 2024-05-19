function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    this.excluded = false;
  }
  
  Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.marks) {
      return;
    }
  
    this.marks.push(...marksToAdd);
  };
  
  Student.prototype.getAverage = function() {
    if (!this.marks || this.marks.length === 0) {
      return 0;
    }
  
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  };
  
  Student.prototype.exclude = function(reason) {
    this.excluded = true;
    delete this.marks;
    delete this.subject;
  };
  
 
  const student1 = new Student('Dima', 'Male', 18);
  const student2 = new Student('Diana', 'Female', 19);
  

  student1.setSubject('Математика');
  student2.setSubject('Английский');
  
  student1.addMarks(85, 90, 80);
  student2.addMarks(95, 92, 88);
  
  student1.exclude('Low attendance');
  
  student1.addMarks(70, 80); 
  