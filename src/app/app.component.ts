import { Component, OnInit } from '@angular/core';
import  {ChatService} from './chat.service';
import {User} from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

users:Array<User>;
selectedUser:User;

constructor(private chatService:ChatService){}
   ngOnInit(): void {
    this.getChatDeatils();
  }

  getChatDeatils(){
  	 this.chatService.getChatDetails().then(      
      users =>{ this.users = users;
        debugger;
        if (this.users.length>0){
      this.selectedUser=this.users[0];
     
     }});
  }
}
