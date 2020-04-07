import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { ProjectsService } from "src/app/admin/services/projects.service";
import { Project } from "src/app/Modals/project";
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number;
  showLoading: boolean = true;

  constructor(private _service: ProjectsService) {}

  ngOnInit(): void {
    this._service.getAllProjects().subscribe((data: Project[]) => {
      this.projects = data;
      this.showLoading = false;
      console.log(`Session Storage is${JSON.stringify(sessionStorage)}`);
    });
  }
  onSaveClick() {
    this._service.insertProject(this.newProject).subscribe(
      (posRes) => {
        var p: Project = new Project();
        p.ProjectId = posRes.ProjectId;
        p.ProjectName = posRes.ProjectName;
        p.DateOfStart = posRes.DateOfStart;
        p.TeamSize = posRes.TeamSize;
        p.Status = posRes.Status;
        p.Active = posRes.Active;
        this.projects.push(p);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onEditClick(record, index) {
    alert(`record is ${JSON.stringify(record)} , index is ${index}`);
    this.editProject.ProjectId = record.project.ProjectId;
    this.editProject.ProjectName = record.project.ProjectName;
    this.editProject.DateOfStart = record.project.DateOfStart.split("/")
      .reverse()
      .join("-"); // converting to Year month date format;
    this.editProject.TeamSize = record.project.TeamSize;
    this.editIndex = index;
  }

  onUpdateClick() {
    this._service.updateProject(this.editProject).subscribe(
      (posRes) => {
        var p: Project = new Project();
        p.ProjectId = this.editProject.ProjectId;
        p.ProjectName = posRes.$set.ProjectName;
        p.DateOfStart = posRes.$set.DateOfStart;
        p.TeamSize = posRes.$set.TeamSize;
        this.projects[this.editIndex] = p;

        console.log(this.editProject);
        console.log(posRes.$set);
      },
      (error) => {}
    );
  }
  toogleDetailsClick() {
    this._service.toogleDetails();
  }
  onDeleteClick(projectId: number, index: number) {
    let i = index;
    let obj = { ProjectId: projectId };
    console.log(obj);
    let status = confirm("Are You sure want to delete");
    if (status == true) {
      this._service.deleteProject(obj).subscribe(
        (posRes) => {
          if (posRes.delete == "success") {
            this.projects.splice(i, 1);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
