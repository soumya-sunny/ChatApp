import { Component, OnInit,OnChanges } from '@angular/core';
import  {ChatService} from './chat.service';
import {User} from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{

  users:Array<User>;
  selectedUser:User;
  ascending:Boolean;

  constructor(private chatService:ChatService){}
   ngOnInit(): void {
     this.ascending=true;
    this.getChatDeatils();
  }

  getChatDeatils(){
  	 this.chatService.getChatDetails().then(      
      users =>{ this.users = users;
        if (this.users.length>0){
     		 this.selectedUser=this.users[0];     
    	 }
   });
  }

  onSelect(user: User): void {
   
    this.selectedUser = user;
  }
  ngOnChanges(){
     this.users =JSON.parse(localStorage.getItem('chats'));
  }
  countChange(){
     this.users =JSON.parse(localStorage.getItem('chats'));
        // this.selectedUser=this.users[0];  
  }
//to be moved to search.pipe.ts
   search(searchStr){
    let chats
    if(searchStr.trim().length==0){
      chats=JSON.parse(localStorage.getItem('chats'));
    }
    else{
     chats= this.users;
    }
    let c=chats.filter(o=>o.user.toLowerCase().indexOf(searchStr.toLowerCase())!=-1);
    this.users = c;
    if (this.users .length>0)
    this.selectedUser=this.users [0];
     
  }

  sort(){
   if(this.ascending){
    this.users .sort((o1,o2)=> o1.user.localeCompare(o2.user));
   }
   else{
     this.users .sort((o1,o2)=> o2.user.localeCompare(o1.user));
   }
   this.ascending=!this.ascending;
  }
  
}
