import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../../core/services/auth.service";
import {LocalStorageService} from "../../../core/services/localStorage";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;                  // {1}

  constructor(private authService: AuthService,private localStorageService: LocalStorageService<any>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();
  }
}
