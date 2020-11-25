import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu:boolean = true;
  title = 'Proyecto';

  ngOnInit(): void {

  }
  elecc() {
    this.menu=false;
  }


}
