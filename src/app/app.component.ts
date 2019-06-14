import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'First Server' }];
  constructor() {

  }
  ngOnInit(): void {
    console.log(this.serverElements);
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'changeds';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
