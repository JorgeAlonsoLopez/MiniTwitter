import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TweetResponse } from '../modelo/Tweets.interface';
import { Observable } from 'rxjs';

const url = 'https://www.minitwitter.com:3001/apiv1/tweets/all';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class MostrarService {

  constructor(private http: HttpClient) {
  
  }

  getListado(): Observable<TweetResponse> {
    return this.http.get<TweetResponse>( url, requestOptions );
 }


}
