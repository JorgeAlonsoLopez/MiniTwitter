import { Component, OnInit } from '@angular/core';
import { Tweet } from '../modelo/Tweet.interface';
import { MostrarService } from '../services/mostrar.service';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  listado: Tweet[] = [];

  constructor(private mostrarService: MostrarService) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar() {
    this.mostrarService.getListado().subscribe(resp => {
       this.listado = resp.result;
    });
 }

}
