import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],

})

export class EmployeeComponent implements OnInit {
  id:number = 0;
  constructor(private empservice: EmployeeService)
  { }
  employee:any=[]
  ngOnInit(){

    this.employee=this.empservice.getEmployees().subscribe(data=>this.employee=data);;
  }
}
