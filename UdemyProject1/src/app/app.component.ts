import { Component } from "@angular/core";
import { LoginService } from "./login/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "UdemyProject1";
  constructor(public _loginService: LoginService) {}
}
