import { Component, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 username!:string;
 email!:string;
 phone!:string;
 password:string="";
 result:string="";
  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
  }

  onSubmit(employee: Employee){

    const addRegister={
      username:this.username,
      email:this.email,
      phone:this.phone,
      password:this.password
    };
    
     this.employeeService.addEmployee(employee).subscribe({
        next:(data) =>{ 
          //alert('Employee created successfully');
        this.result=data.email+ " created successfully";
      },//console.log('data: ', data)
        error:(e)=> { 
          this.result="Error, only one email per user"; 
        }
      });
    
    this.username='';
    this.email='';
    this.phone='';
    this.password='';

  }

}
