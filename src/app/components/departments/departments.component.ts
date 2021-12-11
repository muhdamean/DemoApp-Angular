import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  @Input() dept!:Department;
  depts: Department[]=[];
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((depts)=>(this.depts=depts));
  }

}
