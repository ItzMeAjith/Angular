import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  imgurl:string="assets/cybersafe.png";
name:any="Ajith";
//newname=prompt("Enter new name : ");
age:any=21;

student()
{
   this.name=prompt("Enter new name :");
   this.age=prompt("Enter new age : ")
}
image()
{
  this.imgurl="assets/camera.jfif";
}
}


