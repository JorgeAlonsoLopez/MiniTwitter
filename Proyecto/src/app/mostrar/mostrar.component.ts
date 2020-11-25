import { Component, OnInit } from '@angular/core';
import { Tweet } from '../modelo/Tweet.interface';
import { MostrarService } from '../services/mostrar.service';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss'],
})
export class MostrarComponent implements OnInit {
  listado: Tweet[] = [];

  constructor(private mostrarService: MostrarService, private likeService: LikeService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar() {
    this.mostrarService.getListado().subscribe((resp) => {
      this.listado = resp;
    });
  }

  fav(id:number){
    let id2 = id.toString();
    this.likeService.getFav(id2).subscribe((resp) => {
      alert("El tweet se ha marcado cómo favorito");
    });
  }

}
