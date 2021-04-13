import { Component, OnInit } from "@angular/core";
export interface Book {
  string: number;
  text: string;
}
@Component({
  selector: "app-dynamic-expansion-panel",
  templateUrl: "./dynamic-expansion-panel.component.html",
  styleUrls: ["./dynamic-expansion-panel.component.css"]
})
export class DynamicExpansionPanelComponent implements OnInit {
  public books: Array<any> = [
    { title: "book1", description: "book desc 1" },
    { title: "book2", description: "book desc 2" },
    { title: "book3", description: "book desc 3" },
    { title: "book4", description: "book desc 4 " }
  ];

  constructor() {}

  ngOnInit() {}
}
