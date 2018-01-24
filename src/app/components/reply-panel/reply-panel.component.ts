import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {ChatService} from '../../chat.service';
import {User} from '../../models/user';


@Component({
  selector: 'app-reply-panel',
  templateUrl: './reply-panel.component.html',
  styleUrls: ['./reply-panel.component.css']
})
export class ReplyPanelComponent {

	@Input() selectedUser:User;
	@Output()
	updateMessage = new EventEmitter();

	constructor(private chatService:ChatService){}

  	sendMessage(replyForm){
      let messagesArr=this.selectedUser.messages;
      
      let message={
          id:messagesArr.length.toString(),
          text:replyForm.value.reply,
          createdBy:0,
          created:new Date().toString()
      }

    this.chatService.setChatDetails(message,this.selectedUser);
   	replyForm.reset();
  	this.updateMessage.emit();
  }

}
