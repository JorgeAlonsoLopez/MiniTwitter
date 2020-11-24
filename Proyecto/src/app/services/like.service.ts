import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tweet } from '../modelo/Tweet.interface';
import { Observable } from 'rxjs';

const url = 'https://www.minitwitter.com:3001/apiv1/tweets/like/';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  urlM:string;
  constructor(private http: HttpClient) {}

  getFav(id:number): Observable<Tweet> {
    this.urlM = url+id;
    return this.http.post<Tweet>(this.urlM, requestOptions);
  }
}
