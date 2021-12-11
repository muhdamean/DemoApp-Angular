import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  depts: Department[]=[];
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
     
  }
}
