import { Component, OnInit } from "@angular/core";
import { LoginViewModal } from "../Modals/login-view-modal";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public loginViewModal: LoginViewModal = new LoginViewModal();
  public loginError: string = null;
  constructor(private _loginService: LoginService, private router: Router) {}

  onLoginClick() {
    console.log(this.loginViewModal);
    this._loginService.Login(this.loginViewModal).subscribe(
      posRes => {
        if (posRes.login == "success") {
          this.router.navigateByUrl("/dashboard");
        } else {
          this.loginError = "Invalid User...";
        }
      },
      error => {
        console.log(error);
        this.loginError = "Invalic UserName or Password";
      }
    );
  }
  ngOnInit(): void {}
}
