import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  formLogin!:FormGroup;
  inputType = 'password'

  constructor(private formBuilder: FormBuilder, private router: Router, private service: AuthService) { }

  ngOnInit(): void {
    this.formLogin  = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.service.logout();
  }

  togglePassword(){
    if(this.inputType == 'password'){
      this.inputType = 'text';
    }else{
      this.inputType = 'password';
    }
  }

  login(){
  this.service.login(this.formLogin.value)
  }


}
