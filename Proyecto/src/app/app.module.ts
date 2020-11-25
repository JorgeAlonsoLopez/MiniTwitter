import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';
import { LoginService } from './services/login.service';
import { RegistroService } from './services/registro.service';
import { MostrarComponent } from './mostrar/mostrar.component';
import { RouterModule, Routes } from '@angular/router';
import { MostrarService } from './services/mostrar.service';
import { LikeService } from './services/like.service';


const router:Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'registro',
    component:RegistroComponent
  },
  {
    path: 'all',
    component:MostrarComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forRoot(router)
  ],
  providers: [LoginService,RegistroService,MostrarService,LikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
