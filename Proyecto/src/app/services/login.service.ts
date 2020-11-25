import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/LoginDto';
import { LoginResponse } from '../modelo/Login.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = 'https://www.minitwitter.com:3001/apiv1/auth/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      url,
      loginDto,
      httpOptions
    );
  }
}
