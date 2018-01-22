import { Injectable } from '@angular/core';
import { User } from './models/user';
import { USERS } from './mock-users';


@Injectable()
export class ChatService {

 getChatDetails(): Promise<User[]> {
	return Promise.resolve(USERS);
 }

}
