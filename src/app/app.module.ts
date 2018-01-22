import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {ChatService} from './chat.service';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ReplyPanelComponent } from './components/reply-panel/reply-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ConversationComponent,
    ReplyPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
