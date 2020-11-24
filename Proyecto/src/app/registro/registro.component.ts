import { Component, OnInit } from '@angular/core';
import { RegistroDto } from '../dto/RegistroDto';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario: RegistroDto;

  constructor(private registroService: RegistroService) { 
    this.usuario = new RegistroDto('', '', '');
  }

  ngOnInit(): void {
  }

  new() {
    this.registroService.new(this.usuario).subscribe(respuesta => {
        alert('Registro correcto');
    });
  }

}
