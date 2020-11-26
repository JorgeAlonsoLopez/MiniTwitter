import { Component, OnInit } from '@angular/core';
import { NuevoDto } from '../dto/NuevoDto';
import { NuevoService } from '../services/nuevo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  tweetNuevo: NuevoDto;
  constructor(private nuevoService: NuevoService,private router: Router) {
    this.tweetNuevo = new NuevoDto('');
  }

  ngOnInit(): void {
  }

  nuevo() {
    this.nuevoService.new(this.tweetNuevo).subscribe(respuesta => {
      window.location.reload();
    });
  }

  exit(){
    this.router.navigate(['../all'])
      .then(() => {
    window.location.reload();
  });
  }



}
