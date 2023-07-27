import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent{
  allowNewServer = false;
  serverName ="";
  serverCreationStatus= "No server has create";


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onToggleAddServer()
  {
    this.allowNewServer = !this.allowNewServer;
  }

  onCreateServer()
  {
    this.serverCreationStatus = "Server was successfully created";
  }

  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
