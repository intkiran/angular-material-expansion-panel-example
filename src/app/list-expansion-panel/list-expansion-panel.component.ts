import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-expansion-panel",
  templateUrl: "./list-expansion-panel.component.html",
  styleUrls: ["./list-expansion-panel.component.css"]
})
export class ListExpansionPanelComponent implements OnInit {
  public books: Array<any> = [
    { title: "book1", description: "book desc 1" },
    { title: "book2", description: "book desc 2" },
    { title: "book3", description: "book desc 3" },
    { title: "book4", description: "book desc 4 " }
  ];
  constructor() {}

  ngOnInit() {}
}
