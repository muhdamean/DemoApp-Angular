import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
departments:Department[]=[];
name:string="";
deptId:any;
  constructor(private departmentService: DepartmentService, private router:Router) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe({
      next:(department)=>
      {
        this.departments=department;
        console.log(this.departments);
      },
      error:(e:any)=>{
          console.log(e);
      }

    })
  }
  onDelete(id:any, name:string){
    this.deptId=id;
    this.name=name;
    console.log(id + ' '+ name);
  }
  onDeleteConfirm(deptId:any){
    console.log(deptId);
    this.departmentService.deleteDepartment(deptId).subscribe((res)=>{
      console.log(res);
      
    });
    //this.router.navigate(['departments']);
    
    window.location.reload();
  }
}
