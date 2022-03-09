import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'http://localhost:8000/users'
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>(this.baseURL + '/getAll');
  }   

  getByEmail(email:string){
    return this.http.get<User>(this.baseURL + '/getByEmail/' + email);
  }
  
}
