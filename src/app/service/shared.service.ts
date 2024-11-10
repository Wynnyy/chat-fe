import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  joinedUser : string  = '';

  constructor() { }

  addUser(user : string){
    this.joinedUser = user;
  }
}
