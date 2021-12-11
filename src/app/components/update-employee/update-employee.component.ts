import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:string="";
  username:string="";
  email:string="";
  phone:string="";
  password:string="";
  result:string="";
  employeeId!:string;
  employee!:Employee;
  emp!:Employee;

  constructor(private employeeService: EmployeesService, private _Activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
       const employeeId = params.get('id'); 
       console.log(employeeId);

       this.employeeService.getEmployeeById(employeeId!).subscribe(
          (employees)=>{
            this.employee=employees; 
            console.log(this.employee);

            this.id=this.employee.id;
            this.username=this.employee.username;
            this.email=this.employee.email;
            this.phone=this.employee.phone;
          } );
       //this.emp!=this.employee.find(p => p.id==employeeId);  
      
       
   });
  }
  
  onUpdate(employee: Employee){
    
     this.employeeService.updateEmployee(employee).subscribe({
        next: (data) =>
        { 
          this.result=data;
          console.log(this.result);
        },
        error:(e)=> { alert('Error, unable to update employee'); console.log(e) }
      });
    
    this.username='';
    this.email='';
    this.phone='';
    this.password='';
    this.router.navigate(['employees']);
  }
 
}
