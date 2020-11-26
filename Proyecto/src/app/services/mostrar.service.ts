import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tweet } from '../modelo/Tweet.interface';
import { Observable } from 'rxjs';

const url = 'https://www.minitwitter.com:3001/apiv1/tweets/all';

const requestOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MostrarService {
  constructor(private http: HttpClient) {}

  getListado(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(url, requestOptions);
  }
}
