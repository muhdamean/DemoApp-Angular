import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Department';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
id:any;
name:string="";
description:string="";
date:Date=new Date();
prevDate:Date=new Date();
department!:Department;
msg:string="";
result!:Department;
deptId!:number;
  

  constructor(private departmentService:DepartmentService,private _Activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
       const deptId = params.get('id'); 
       console.log(deptId);

       this.departmentService.getDepartmentById(deptId!).subscribe(
          (department)=>{
            this.department=department; 
            console.log(this.department);

            this.id=this.department.id;
            this.name=this.department.name;
            this.description=this.department.description;
            this.date=this.transform(this.department.date);
          } );
      
       
   });
  }

  onUpdate(department:Department){
    this.departmentService.updateDepartment(department).subscribe({next:(dept)=>{
      this.result=dept;
      console.log(dept);
      this.router.navigate(['departments']);
    },
    error:(e)=>{
      console.log(e.message);
    }
  })
  }
  transform(value: any) {
    var datePipe = new DatePipe("en-US");
     value = datePipe.transform(value, 'yyyy-MM-dd');
     return value;
 }
}
