import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "./services/account.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AccountService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }
    // To redirect to the page user is after login
    this.authService.redirectUrl = url;
    // move to login page
    this.router.navigate(['/login']);
    return false;
  }
}