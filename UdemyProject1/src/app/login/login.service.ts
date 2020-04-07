import { Injectable } from "@angular/core";
import { HttpClient, HttpBackend } from "@angular/common/http";
import { LoginViewModal } from "../Modals/login-view-modal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  private httpClient: HttpClient;
  constructor(private httpBackend: HttpBackend, private router: Router) {}
  currentUserName: string = null;
  public Login(login: LoginViewModal): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient
      .post<any>("http://localhost:8080/login", login, {
        responseType: "json"
      })
      .pipe(
        map(data => {
          if (data) {
            this.currentUserName = data.user.Uname;
            sessionStorage.currentUser = JSON.stringify(data);
            alert(sessionStorage.currentUser);
            return data;
          }
        })
      );
  }
  public isAuthenticatd(): boolean {
    var token = sessionStorage.getItem("currentUser")
      ? JSON.parse(sessionStorage.getItem("currentUser")).token
      : null;
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  public Logout() {
    this.currentUserName = null;
    sessionStorage.removeItem("currentUser");
    this.router.navigateByUrl("/login");
  }
}
