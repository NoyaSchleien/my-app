import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  {
userName:string;
public msgs:Array<string>;
proxy:SignalR.Hub.Proxy;

  constructor(private _ref: ChangeDetectorRef) { 
var me=this;
var connection=$.hubConnection("http://localhost:58949");
me.proxy= connection.createHubProxy("videohub");
this.msgs= new Array<string>();

me.proxy.on ("messageFromServer", (i) => {
  this.msgs.push(i);
  _ref.detectChanges();
});

connection.start()
.done(function(){
  console.log("Now connected, connection ID = " + connection.id);
})
.fail(function(){
  console.log("Could not connect");
});
  }


broadcastMessage(msg:string){
this.proxy.invoke("HandleMsg", this.userName + " says " + msg);
}
}