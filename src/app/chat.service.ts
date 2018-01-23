import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { User } from './models/user';
import { USERS } from './mock-users';


@Injectable()
export class ChatService {

  constructor (
    private http: HttpClient
  ) {}

 getChatDetails() {
 	localStorage.setItem('chats',JSON.stringify(USERS));
	return Promise.resolve(USERS);
	// return this.http.get(` http://demo4842709.mockable.io/users`,{responseType: 'text'})
 //    .map((res) => res);
 }

setHeroes(message,selectedUser){
    
        let chats= JSON.parse(localStorage.getItem('chats'));
     let ind=chats.indexOf(chats.filter(o=>o.id==selectedUser.id)[0]);
    selectedUser.messages.push(message);
    chats[ind]=selectedUser;
   localStorage.setItem('chats',JSON.stringify(chats));
    localStorage.setItem('original_chats', JSON.stringify(chats));
  }
}
