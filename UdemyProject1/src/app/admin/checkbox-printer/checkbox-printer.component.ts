import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkbox-printer",
  templateUrl: "./checkbox-printer.component.html",
  styleUrls: ["./checkbox-printer.component.css"],
})
export class CheckboxPrinterComponent implements OnInit {
  isChecked: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
