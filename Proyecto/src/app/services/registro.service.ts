import { Injectable } from '@angular/core';
import { RegistroDto } from '../dto/RegistroDto';
import { RegistroResponse } from '../modelo/Registro.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = 'https://www.minitwitter.com:3001/apiv1/auth/signup';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  new(registroDto: RegistroDto): Observable<RegistroResponse> {
    return this.http.post<RegistroResponse>(
      url,
      registroDto,
      httpOptions
    );
  }



}
