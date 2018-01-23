import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {

	lastMessage:string;
	lastMessageTime:string;

	@Input() user:any;
	ngOnChanges(){
	        let messages=this.user.messages;
	        this.lastMessage=messages.length>0?messages[messages.length-1].text:'';
	        
	        this.lastMessageTime=messages.length>0?messages[messages.length-1].created:'';
	}
}
