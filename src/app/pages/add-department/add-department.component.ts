import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  name:string="";
  description:string="";
  date:string="";
  result!:Department;
  msg:string="";
  //Form Validables 
//registerForm: FormGroup; //add FormBuilder private variable in ctor

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    //Add User form validations
    // this.registerForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required]],
    //   });
  }

  onSubmit(department:Department){
      this.departmentService.addDepartment(department).subscribe({next:(dept)=>{
        this.result=dept;
        console.log('Department created successfully ');
        this.msg=this.result.name+ " department created successfully";
        this.name="";
        this.description="";
        this.date="";
        
      },
      error:(e)=>{
        console.log(e.message);
        this.msg="error creating department - "+e.message;
      }
    });
  }
}
