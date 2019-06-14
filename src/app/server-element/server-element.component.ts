import { Component, OnInit, Input,
   OnChanges, SimpleChanges,
    SimpleChange,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
 OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
 {
  
 @Input('srvElement') element: {type: string, name: string, content: string};
 @Input() name:string;
 @ViewChild('heading')  header: ElementRef;
 @ContentChild('contentParagraph') childContent: ElementRef;
  constructor() {
    console.log('constructor Called ');
  }
    
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng On Changes called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Called ');
    console.log("Text Content"+ this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph'+ this.childContent.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ng Do Check Called!');
  }
 
  ngAfterContentInit(): void {
    console.log('After Content Init');
    console.log('Text Content of Paragraph'+ this.childContent.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('After Content Checked!');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked!');
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
    console.log('Text Contet' + this.header.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log("On Destroy");
  }
 

}
