import { Component } from '@angular/core';
import { employeeService } from './Services/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [employeeService]
})
export class AppComponent {
  title = 'Sample3';
  emp?: any[];
  nn: string = "Working";
  arr:string[] = ["a","b","c","d","e"];
  //constructor(private e:employeeService)
  constructor()
  {

   // this.emp = e.employee;
  }


}


class Student
{
  s1: string = "Stusent1";
}
class clg
{
  ss = new Student();
  /**
   *
   */
  constructor() {
    console.log(this.ss.s1);

  }
}
