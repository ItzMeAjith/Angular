import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  pipe: string = "";
  obj:any = new AppComponent();
  name123: string = new AppComponent().nn;
ar:Array<any> = new AppComponent().arr;

  EmpID?: number;
  EmpName?: string;
  EmpDepartment?: string;
  EmpSalary?: number;
  EmployeeArrays: Employee[] = [{ EmpID: 111, EmpName: "Ajith", EmpDepartment: "IT", EmpSalary: 9076 },
    { EmpID: 112, EmpName: "Ajith", EmpDepartment: "IT", EmpSalary: 9076 },
    { EmpID: 113, EmpName: "Ajith", EmpDepartment: "IT", EmpSalary: 9076 }
  ]
   onAdd()
  {
    this.EmployeeArrays.push({EmpID:this.EmpID,EmpName: this.EmpName,EmpDepartment: this.EmpDepartment,EmpSalary:this.EmpSalary})
  }
  onDelete(j:any)
  {
    this.EmployeeArrays.splice(j, 1);
  }
}
class Employee
{
  EmpID?: number;
  EmpName?: string;
  EmpDepartment?: string;
  EmpSalary?: number;
}
