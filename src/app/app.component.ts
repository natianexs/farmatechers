import { Component } from '@angular/core';
import {SidebarModule} from "./features/sidebar/sidebar.module";
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, SidebarModule, SharedModule]
})
export class AppComponent {
  title = 'farmatechers';
}
