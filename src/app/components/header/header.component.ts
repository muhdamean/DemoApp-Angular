import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any;
  constructor(private accountService:AccountService) {
    
  }

  ngOnInit(): void {
    this.user = this.accountService.getUserDetail();
    // Subscribe to listen changes of login status
    this.accountService.loginStatus.subscribe(
      status => {
        if (status)
          this.user = this.accountService.getUserDetail();
            
        else 
          this.user = null;
      }
    );
    
  }

  logout() {
    this.accountService.logout();
  
  }

}
