import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Account } from '../Account';
import { LoginToken } from '../LoginToken';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  redirectUrl: string="";
  loginStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  private apiUrl='https://localhost:7180/api/account/login'

  constructor(private http:HttpClient, private router:Router) { }

  login(account:Account):Observable<LoginToken>{
    return this.http.post<LoginToken>(this.apiUrl,account, httpOptions).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(()=>error.message || "server error.");
  } 

  public getUserDetail() {     
    if (localStorage.getItem('email')) {
      return localStorage.getItem('email');
    } else {
      return null;
    }
  }

  public get isLoggedIn() { return !!localStorage.getItem('email'); }  
  public get getToken() { return localStorage.getItem('token'); }
 // public get getRefreshToken() { return localStorage.getItem('refresh'); }


  public logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.loginStatus.emit(false);
  }
}
