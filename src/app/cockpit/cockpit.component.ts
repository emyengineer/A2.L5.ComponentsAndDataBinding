import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is the default, you can choose None or Native which uses shallow DOM
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName = '';
  newServerContent = '';
  @ViewChild('serverContent')  serverContentInput : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameServer: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameServer.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameServer: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:  nameServer.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
