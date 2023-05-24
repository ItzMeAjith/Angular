  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map,filter } from 'rxjs/operators'
import { IEmployee } from 'src/assets/Data/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService
{
  private _url="assets/Data/Employee.json"
  constructor(private http:HttpClient)
  {

  }
  public getEmployees():Observable<IEmployee[]>

  {
    return this.http.get<IEmployee[]>(this._url);
  }

  public getEmployeeByEmpID(empID: number): Observable<IEmployee> {
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        map(employees => employees.find(employee => employee.EmpID === empID)),
        filter(employee => !!employee),
        map(employee => employee as IEmployee)
      );
  }

}
