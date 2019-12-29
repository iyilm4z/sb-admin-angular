import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent, SidebarBrandComponent } from "./sidebar.component";
import { RouterModule } from "@angular/router";
import { SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SidebarBrandComponent],
  declarations: [SidebarComponent, SidebarBrandComponent, SidebarMenuComponent]
})
export class SidebarModule {}
