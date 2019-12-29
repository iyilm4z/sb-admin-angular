import { Component } from "@angular/core";

@Component({
  selector: "sb-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
  host: {
    id: "content-wrapper",
    class: "d-flex flex-column"
  }
})
export class ContentComponent {}
