import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "@ngx-sb-admin";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule.forRoot(undefined)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
