import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Employee} from '../Employee';
import { catchError } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl='https://localhost:7180/api/employee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl).pipe(catchError(this.errorHandler));
  }

  getEmployeeById(employee:string): Observable<Employee>{
    const url=`${this.apiUrl}/${employee}`
    return this.http.get<Employee>(url).pipe(catchError(this.errorHandler));
  }

  addEmployee(employee:Employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl, employee, httpOptions).pipe(catchError(this.errorHandler));
  }

  updateEmployee(employee:Employee): Observable<string>{
    const url=`${this.apiUrl}/${employee.id}`;
    return this.http.put<string>(url, employee, httpOptions).pipe(catchError(this.errorHandler));
  }

  deleteEmployee(id:number): Observable<string  >{
    const url=`${this.apiUrl}/${id}`;
    return this.http.delete<string>(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(()=>error.message || "server error.");
  } 
}
