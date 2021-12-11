import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit {
  @Input() employee!:Employee;
  employees: Employee[]=[];
  id:any;
  name:string="";

  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees)=>(this.employees=employees))
  }
  onDelete(id:any, name:string){
    this.id=id;
    this.name=name;
    console.log(this.id);

  }

  onDeleteConfirm(id:any){
    this.employeeService.deleteEmployee(id).subscribe((res)=>{
      console.log(res);
    });
    
    window.location.reload();
  }

}
