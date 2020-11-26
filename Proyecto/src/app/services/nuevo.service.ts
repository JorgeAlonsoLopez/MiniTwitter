import { Injectable } from '@angular/core';
import { NuevoDto } from '../dto/NuevoDto';
import { Tweet } from '../modelo/Tweet.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = 'https://www.minitwitter.com:3001/apiv1/tweets/create';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class NuevoService {

  constructor(private http: HttpClient) { }


  new(nuevoDto: NuevoDto): Observable<Tweet> {
    return this.http.post<Tweet>(
      url,
      nuevoDto,
      httpOptions
    );
  }
}
