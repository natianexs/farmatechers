import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./page/home-page/home-page.component";
import {SidebarModule} from "../sidebar/sidebar.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SidebarModule,
    SharedModule
  ]
})
export class HomeModule { }
