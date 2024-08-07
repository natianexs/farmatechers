import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {User} from "../models/login";
import {LocalStorageService} from "./localStorage";


@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    const isLogged = this.localStorage.getItem('loggedIn');
    if(isLogged){
      this.loggedIn.next(isLogged)
    }
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private localStorage: LocalStorageService<any>,
  ) { }

  login(user: User) {
    if (user.user !== '' && user.password !== '' ) {
      this.localStorage.setItem('loggedIn',true);
      const isLogged = this.localStorage.getItem('loggedIn');
      this.loggedIn.next(isLogged);
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
}
