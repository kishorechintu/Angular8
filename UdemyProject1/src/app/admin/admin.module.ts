import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { AppRoutingModule } from "../app-routing.module";
import { ProjectsComponent } from "./projects/projects.component";
import { FormsModule } from "@angular/forms";
import { ProjectIDUniqueValidatorDirective } from "./Directives/project-idunique-validator.directive";
import { ProjectComponent } from "./project/project.component";
import { CheckboxPrinterComponent } from "./checkbox-printer/checkbox-printer.component";

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    ProjectIDUniqueValidatorDirective,
    ProjectComponent,
    CheckboxPrinterComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent],
})
export class AdminModule {}
