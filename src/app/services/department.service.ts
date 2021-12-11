import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Department';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl='https://localhost:7180/api/departments';
  constructor(private http: HttpClient) { }

  getDepartments():Observable<Department[]>{
    return this.http.get<Department[]>(this.apiUrl);
  }

  getDepartmentById(departmentId:string):Observable<Department>{
    const url=`${this.apiUrl}/${departmentId}`;
    return this.http.get<Department>(url);
  }

  addDepartment(department:Department):Observable<Department>{
    return this.http.post<Department>(this.apiUrl, department,httpOptions);
  }

  updateDepartment(department:Department):Observable<Department>{
    const url=`${this.apiUrl}/${department.id}`;
    return this.http.put<Department>(url, department,httpOptions);
  }

  deleteDepartment(id:number):Observable<string>{
    const url=`${this.apiUrl}/${id}`;
    return this.http.delete<string>(url);
  }
}
