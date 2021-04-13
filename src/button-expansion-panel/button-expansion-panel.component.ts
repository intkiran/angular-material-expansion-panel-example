import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-button-expansion-panel",
  templateUrl: "./button-expansion-panel.component.html",
  styleUrls: ["./button-expansion-panel.component.css"]
})
export class ButtonExpansionPanelComponent implements OnInit {
  constructor() {}
  isOpen: boolean = false;

  toggleExpansion() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {}
}
