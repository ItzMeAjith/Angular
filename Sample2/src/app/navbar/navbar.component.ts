import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent
{
  userName: string;
  path: string;
  //Employee details
  EmpID: number;
  EmpName: string;
  EmpDepartment: string;
  EmpSalary: number;
  submit()
  {
    console.log(`${this.EmpID} ${this.EmpName} ${this.EmpDepartment} ${this.EmpSalary}`);
  }

}
