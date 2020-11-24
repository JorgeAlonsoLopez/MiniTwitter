import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/LoginDto';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: LoginDto;

  constructor(private loginService: LoginService) { 
    this.usuario = new LoginDto('', '');
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.usuario).subscribe(respuesta => {
        alert('Login correcto');
        localStorage.setItem('token', respuesta.token);
    });
  }


}
