import { Component, OnInit } from '@angular/core';
import { RegistroDto } from '../dto/RegistroDto';
import { RegistroService } from '../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  acceso:boolean = true;
  usuario: RegistroDto;

  constructor(private registroService: RegistroService,private router: Router) {
    this.usuario = new RegistroDto('', '', '');
  }

  ngOnInit(): void {
    this.acceso = false;
  }

  new() {
    this.registroService.new(this.usuario).subscribe(respuesta => {
        alert('Registro correcto');
        this.acceso=true;
    });
  }
  exit(){
    this.router.navigate(['../'])
      .then(() => {
    window.location.reload();
  });
  }

}
