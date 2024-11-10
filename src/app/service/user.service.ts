import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


import {Observable} from 'rxjs';
import {Status, User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly _http: HttpClient) {
  }


  _headers = new HttpHeaders({'Content-Type': 'application/json'})


   params = new HttpParams()
     .set('nickName', '')


  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>("http://localhost:8080/user");
  }

  getUserByName(nickName: string): Observable<User> {
    return this._http.get<User>("http://localhost:8080/user/nick", {
      params: {'nickName': nickName},
      headers: this._headers
    })
  }


  createUser(user : User): Observable<User> {
    return this._http.post<User>("http://localhost:8080/user", JSON.stringify(user),
      { headers: this._headers }).pipe()



  }


}
