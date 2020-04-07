import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { Project } from "../../Modals/project";
import { map, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  public MySubject: BehaviorSubject<boolean>;

  constructor(private _http: HttpClient) {
    this.MySubject = new BehaviorSubject<boolean>(false);
  }

  toogleDetails() {
    this.MySubject.next(!this.MySubject.value);
  }
  getAllProjects(): Observable<Project[]> {
    // var currentUser = { token: "" };
    // var headers = new HttpHeaders();
    // headers = headers.set("Authorization", "Bearer");
    // if (sessionStorage.currentUser !== null) {
    //   currentUser = JSON.parse(sessionStorage.currentUser);
    //   headers = headers.set("Authorization", "Bearer" + currentUser.token);
    // }

    return this._http.get<Project[]>("http://localhost:8080/fetch");
  }
  getProjectByProjectId(projectId: any): Observable<any> {
    console.log("In service ..Obj is", projectId);

    return this._http.get<any>("http://localhost:8080/fetchbyid", projectId);
  }
  insertProject(newProject: Project): Observable<any> {
    return this._http.post<any>("http://localhost:8080/insert", newProject);
  }
  updateProject(existingProject: Project): Observable<any> {
    console.log("updating", JSON.stringify(existingProject));
    return this._http.put<any>("http://localhost:8080/update", existingProject);
  }
  deleteProject(projectId): Observable<any> {
    return this._http.post<any>("http://localhost:8080/delete", projectId);
  }
}
