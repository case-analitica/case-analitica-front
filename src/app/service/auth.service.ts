import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/model/auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = `${environment.urlApi}/auth`;

  constructor(private httpClient: HttpClient) { }

  public login(auth: Auth) {
    console.log(auth)
    return this.httpClient.post(`${this.API}`, auth, {
      observe: 'response'
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
