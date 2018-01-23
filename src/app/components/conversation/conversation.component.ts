import { Component, OnInit,Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {

  @Input() message:Message;
  @Input() user:any; 

  constructor(){
  	console.log(this.message);
  }
}
