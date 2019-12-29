import {
  Component,
  ContentChild,
  AfterContentInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from "@angular/core";

@Component({
  selector: "sb-sidebar-brand",
  template: `
    <ng-template #templateRef><ng-content></ng-content></ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarBrandComponent {
  @ViewChild("templateRef", { static: true })
  public templateRef: TemplateRef<any>;
}

@Component({
  selector: "sb-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements AfterContentInit {
  @ContentChild(SidebarBrandComponent, { static: false })
  private brand: SidebarBrandComponent;

  @Input()
  public brandUrl = "/";

  ngAfterContentInit(): void {}
}
