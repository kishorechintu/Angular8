import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { LoginService } from "src/app/login/login.service";

@Injectable({
  providedIn: "root"
})
export class CanActivateGuardService implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(this._router.url);
    if (this._loginService.isAuthenticatd()) {
      return true;
    } else {
      this._router.navigateByUrl("/login");
      return false;
    }
  }
}
