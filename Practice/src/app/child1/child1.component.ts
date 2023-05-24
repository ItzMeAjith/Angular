import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
 Rollno?: number;
  name?: string;
  Dept?: string;
  Grade?: string;
  photo?: string;
  Student: Array<any> = [
    // { Rollno: 111, name: "Ajith", Dept: "IT", Grade: "A",photo :"assets/student.png"},
    // { Rollno: 112, name: "Hari", Dept: "CSE", Grade: "O",photo :"assets/student1.png" },
    // { Rollno: 113, name: "Ranjith", Dept: "EEE", Grade: "A+",photo :"assets/student2.png" }

  ]

  addStudent() {
    if (this.Rollno == null || this.Dept == null || this.name == null || this.Grade == null || this.photo == null)
    {
      alert("Please fill all the details!!!");
    }
    else
    {
     this.Student.push({ Rollno: this.Rollno, name: this.name, Dept: this.Dept, Grade: this.Grade,photo: this.photo});
    }
  }
  onDelete(index: number) {
    this.Student.splice(index, 1);
  }

  Applyclass()
  {
    let cls = {
      heading:true
    }
    return cls
  }
  addStyle()
  {
    let st = {
      'font-weight': 'bold',
      'margin-left': 'auto',
      'margin-right': 'auto'
    };
    return st;
  }
}
