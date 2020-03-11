import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { EmployeeService } from "./employee.service";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/internal/operators";

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this._employeeService.getEmployee(+route.paramMap.get("id")).pipe(
      map(employee => {
        const employeeExists = !!employee;
        if (employeeExists) {
          return true;
        } else {
          this._router.navigate(["notfound"]);
          return false;
        }
      }),
      catchError(err => {
        console.log(err);
        return of(false);
      })
    );

    // !! mark is used to convert an expression to boolean
  }
}
