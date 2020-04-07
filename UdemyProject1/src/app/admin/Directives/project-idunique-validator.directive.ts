import { Directive } from "@angular/core";
import {
  AsyncValidator,
  ValidationErrors,
  NG_ASYNC_VALIDATORS,
  AbstractControl,
} from "@angular/forms";
import { ProjectsService } from "../services/projects.service";
import { Project } from "src/app/Modals/project";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Directive({
  selector: "[appProjectIDUniqueValidator]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ProjectIDUniqueValidatorDirective,
      multi: true,
    },
  ],
})
export class ProjectIDUniqueValidatorDirective {
  constructor(private _projectService: ProjectsService) {}
  // validate(control: AbstractControl) Observable<ValidationErrors | null> {
  //   {
  // let obj = { ProjectId: control.value };
  // return this._projectService.getProjectByProjectId(obj).pipe(
  //   map((existingProject: Project) => {
  //     if (existingProject !== null) {
  //       console.log("Entered into not null direvtive ");
  //       return { uniqueProjectId: { valid: false } };
  //     } else {
  //       console.log("entered into null directive");
  //       return null;
  //     }
  //   })
  // );
  //   }
  // }
}
