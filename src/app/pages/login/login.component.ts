import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/Account';
import { LoginToken } from 'src/app/LoginToken';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // frmLogin!: FormGroup;
  // isSubmitted = false;
  username:string="";
  password:string="";
  error: string="";
  response!:LoginToken;

  msg:string="";
  
  constructor(private accountService: AccountService,      
    private router: Router) { }

  ngOnInit(): void {
    //   this.frmLogin = this.frmBuilder.group({
    //     username: ['', Validators.required ],
    //     password: ['', Validators.required ]
    // });
  }

  // get frm() { return this.frmLogin.controls; }

  login(acount:Account){
   
    this.accountService.login(acount).subscribe({next:(data)=>{
      this.response=data;
      if(this.response!==null){
        const prices = this.response;//.map(data => data.productPrice); 
        localStorage.setItem("token",this.response.token);
        localStorage.setItem("email",this.response.email);
       
        // console.log(this.response.token);
        this.router.navigate(['employees']);
      }
      console.log('check your credentials');
      this.msg="check your credentials";
    },
    error:(err)=>{
      this.msg=err;
      console.log(this.msg+ ' check your credentials');
      this.msg="check your credentials";
    }
  })
  }

  focused() { this.error = ''; }
}
  

