export class Project {
  ProjectId: number;
  ProjectName: string;
  DateOfStart: string;
  TeamSize: number;
  Active: boolean;
  Status: string;

  ClientLocationName: string;

  constructor() {
    this.ProjectId = null;
    this.ProjectName = null;
    this.DateOfStart = null;
    this.TeamSize = null;
    this.Active = null;
    this.Status = null;
    this.ClientLocationName = null;
  }
}
