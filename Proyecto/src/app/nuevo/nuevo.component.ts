import { Component, OnInit } from '@angular/core';
import { NuevoDto } from '../dto/NuevoDto';
import { NuevoService } from '../services/nuevo.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  tweetNuevo: NuevoDto;
  constructor(private nuevoService: NuevoService) {
    this.tweetNuevo = new NuevoDto('');
  }

  ngOnInit(): void {
  }

  nuevo() {
    this.nuevoService.new(this.tweetNuevo).subscribe(respuesta => {

    });
  }

}
