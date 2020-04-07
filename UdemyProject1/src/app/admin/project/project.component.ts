import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Project } from "src/app/Modals/project";
import { ProjectsService } from "../services/projects.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  @Input("currentProject") project: Project;
  @Input("recordIndex") i: number;
  @Output() editProject = new EventEmitter();
  @Output() deleteProject = new EventEmitter();

  hideDetails: boolean = false;
  MySubscription: Subscription;

  constructor(public _projectService: ProjectsService) {}

  onEditClick() {
    this.editProject.emit({ project: this.project, index: this.i });
  }
  onDeleteClick() {}

  ngOnInit(): void {
    this.MySubscription = this._projectService.MySubject.subscribe((hide) => {
      this.hideDetails = hide;
    });
  }
  ngOnDestroy() {
    this.MySubscription.unsubscribe();
  }
}
