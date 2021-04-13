import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isOpen: boolean = false;

  toggleExpansion() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}
}
