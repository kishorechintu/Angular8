import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor() {}
  getTeamMembersSummary(): any[] {
    let TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarlyavailableMembers: 5 },
      { Region: "South", TeamMembersCount: 35, TemporarlyavailableMembers: 4 },
      { Region: "West", TeamMembersCount: 24, TemporarlyavailableMembers: 6 },
      { Region: "North", TeamMembersCount: 18, TemporarlyavailableMembers: 3 }
    ];
    return TeamMembersSummary;
  }
  getTeamMembers(): any[] {
    let TeamMembers = [
      {
        Region: "East",
        Members: [
          { ID: 1, Name: "Kishore", Status: "Available" },
          { ID: 2, Name: "Kumar", Status: "Available" },
          { ID: 3, Name: "Suresh", Status: "Busy" },
          { ID: 4, Name: "Chintu", Status: "Available" }
        ]
      },
      {
        Region: "South",
        Members: [
          { ID: 1, Name: "Venni", Status: "Busy" },
          { ID: 2, Name: "Chinni", Status: "Available" },
          { ID: 3, Name: "Mahesh", Status: "Busy" },
          { ID: 4, Name: "Anil", Status: "Available" }
        ]
      },
      {
        Region: "West",
        Members: [
          { ID: 1, Name: "Venni", Status: "Busy" },
          { ID: 2, Name: "Chinni", Status: "Available" },
          { ID: 3, Name: "Mahesh", Status: "Busy" },
          { ID: 4, Name: "Anil", Status: "Available" }
        ]
      },
      {
        Region: "North",
        Members: [
          { ID: 1, Name: "Venni", Status: "Busy" },
          { ID: 2, Name: "Chinni", Status: "Available" },
          { ID: 3, Name: "Mahesh", Status: "Busy" },
          { ID: 4, Name: "Anil", Status: "Available" }
        ]
      }
    ];
    return TeamMembers;
  }
}
