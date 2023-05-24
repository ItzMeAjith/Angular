import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent
{
  EmpID: number;
  EmpName: string;
  EmpDepartment: string;
  EmpSalary: number;
  EmployeeArrays: Employee[] = [
    // { EmpID: 111, EmpName: "Ajth", EmpDepartment: "Development", EmpSalary: 10000 },
    // { EmpID: 112, EmpName: "Hari", EmpDepartment: "Development", EmpSalary: 10000 },
    // { EmpID: 112, EmpName: "Hari", EmpDepartment: "Development", EmpSalary: 10000 },
    // { EmpID: 113, EmpName: "Ajth", EmpDepartment: "Development", EmpSalary: 10000 },
    // { EmpID: 114, EmpName: "Hari", EmpDepartment: "Development", EmpSalary: 10000 }
  ]
  // emp1 = new Employee(111, "Ajith", "Dev", 50000);
  onAdd()
  {
    this.EmployeeArrays.push({EmpID:this.EmpID,EmpName: this.EmpName,EmpDepartment: this.EmpDepartment,EmpSalary:this.EmpSalary})
  }
  onDelete(j)
  {
    //this.EmployeeArrays.splice(this.EmployeeArrays.indexOf(j), 1);
    this.EmployeeArrays.splice(j, 1);
  }
}
class Employee
{
  EmpID: number;
  EmpName: string;
  EmpDepartment: string;
  EmpSalary: number;
  //EmpDate
  // constructor(id, name, dept, sal)
  // {
  //   this.EmpID = id;
  //   this.EmpName = name;
  //   this.EmpDepartment = dept;
  //   this.EmpSalary = sal;
  // }
}
