import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/LoginDto';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  acceso:boolean = true;
  usuario: LoginDto;

  constructor(private loginService: LoginService,private router: Router) {
    this.usuario = new LoginDto('', '');
  }

  ngOnInit(): void {
    this.acceso=false;
  }

  login() {
    this.loginService.login(this.usuario).subscribe(respuesta => {
      if(respuesta.token!=""){
        localStorage.setItem('token', respuesta.token);
        //this.acceso=true;
        this.router.navigate(['/all']).then(() => {
          window.location.reload();
        });
      }

    });
  }

  exit(){
    this.router.navigate(['../']).then(() => {
    window.location.reload();
  });
  }


}
