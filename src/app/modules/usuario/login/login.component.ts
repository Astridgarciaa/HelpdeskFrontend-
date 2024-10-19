import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private loginService: LoginService
  ) { }
  nombreDeUsuario: string = '';
  password: string = '';

  login() {
    console.log(this.nombreDeUsuario);
    console.log(this.password);
  }
}
