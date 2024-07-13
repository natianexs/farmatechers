import { Component } from '@angular/core';
import { SidebarComponent } from "../../../sidebar/sidebar.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [SidebarComponent]
})
export class HomePageComponent {

}
