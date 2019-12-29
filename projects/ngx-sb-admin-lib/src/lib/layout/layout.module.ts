import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { WrapperModule } from "./wrapper/wrapper.module";
import { LayoutState } from "../layout.state";
import { ContentModule } from "./content/content.module";
import { FooterModule } from "./footer/footer.module";
import { SidebarModule } from "./sidebar/sidebar.module";
import { TopbarModule } from "./topbar/topbar.module";

const IMPORTS_and_EXPORTS = [
  WrapperModule,
  ContentModule,
  FooterModule,
  SidebarModule,
  TopbarModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...IMPORTS_and_EXPORTS],
  exports: [...IMPORTS_and_EXPORTS]
})
export class LayoutModule {
  constructor(@Optional() @SkipSelf() layoutModule: LayoutModule) {
    if (layoutModule) {
      throw new Error(
        "LayoutModule is already loaded. Import it in the AppModule only!"
      );
    }
  }
  static forRoot(layoutState: LayoutState): ModuleWithProviders {
    return {
      ngModule: LayoutModule
      // providers: [...layoutProvider(layoutState), LayoutService]
    };
  }
}
