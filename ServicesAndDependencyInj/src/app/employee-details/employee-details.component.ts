import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
   id:number=112;
   ids:number=112;
   emp:any=[]
    employee:any=[]
  constructor(private empservice:EmployeeService) {

  }
  Get()
  {
    this.id=this.ids
    this.emp=this.empservice.getEmployeeByEmpID(this.id).subscribe(data=>this.emp=data);
    console.log(this.emp);
    console.log(this.id);
  }



  ngOnInit(){
    this.employee = this.empservice.getEmployees().subscribe(data=>this.employee=data);
    this.emp=this.empservice.getEmployeeByEmpID(this.id).subscribe(data=>this.emp=data);

  }

}
