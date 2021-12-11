import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    if(localStorage.getItem('token') != null) 
    {
        const token =  localStorage.getItem('token');
        //console.log(token);
        // if the token is  stored in localstorage add it to http header
        //const headers = new HttpHeaders().set("token", token);
        //clone http to the custom AuthRequest and send it to the server 
        const AuthRequest = request.clone( { 
            headers: new HttpHeaders({
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              })
        });
        
        return next.handle(AuthRequest);
    }else {
        return next.handle(request);
    }
    
  }
}