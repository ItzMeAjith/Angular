export interface IEmployee
{
  find(arg0: (e: any) => boolean): any;
  EmpID: number;
  EmpName: string;
  EmpSalary: number;
  EmpDepartment: string;
}
