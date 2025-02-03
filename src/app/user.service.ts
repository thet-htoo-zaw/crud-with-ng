import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = 'http://localhost:3000/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.API_URL, user);
  }


  constructor(private http: HttpClient) { }
}
