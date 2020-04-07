import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  Designation: string;
  UserName: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];
  ToDay;
  constructor(private _dashboardService: DashboardService) {}
  onProjectChange(event) {
    if (event.target.text == "Project A") {
      this.ProjectCost = 32400;
      this.CurrentExpenditure = 54780;
      this.AvailableFunds = 233440;
    } else if (event.target.text == "Project B") {
      this.ProjectCost = 43400;
      this.CurrentExpenditure = 64780;
      this.AvailableFunds = 543440;
    } else if (event.target.text == "Project C") {
      this.ProjectCost = 35400;
      this.CurrentExpenditure = 55480;
      this.AvailableFunds = 653440;
    } else if (event.target.text == "Project D") {
      this.ProjectCost = 76400;
      this.CurrentExpenditure = 89480;
      this.AvailableFunds = 753440;
    }
  }
  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.UserName = "Kishore";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 211350;
    this.CurrentExpenditure = 96780;
    this.AvailableFunds = 52530;
    this.Clients = ["ABC Infotech", "DEF Software Solutions", "GHI Industries"];
    this.Projects = ["Project A", "Project B", "Project C", "Project D"];
    for (var i = 2019; i >= 2000; i--) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this._dashboardService.getTeamMembersSummary();
    console.log(JSON.stringify(this.TeamMembersSummary));

    this.TeamMembers = this._dashboardService.getTeamMembers();
    this.ToDay = new Date();
  }
}
