import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // selector: '[app-test]', // Attributes
  // selector: '.app-test', // Class
  selector: 'app-test',
  // templateUrl: './test.component.html',

  // Interpolation
  // template: `
  //               <h2>
  //                 Welcome {{ name }}, from Test Component
  //               </h2>
  //               <h2> {{2+2}} </h2>
  //               <h2> {{ "Welcome " + name }} </h2>
  //               <h2> {{ grretUser() }} </h2>
  //               <h2> {{ siteUrl }} </h2>

  //           `,

  // Property Bindings
  // template: `
  //               <h2>
  //                 Welcome {{ name }}, from Test Component
  //               </h2>

  //               <input [id]="myId" type='text' [value]="name">
  //               <input [disabled]="isDisabled" id="{{myId}}" type='text' value="Raju">
  //               <input bind-disabled="isDisabled" bind-id="myId" type='text' value="Raju">

  //           `,
  // Class Binding
  // template: `
  //           <h2>
  //             Welcome {{ name }}
  //           </h2>
  //           <h2 class="text-success">Raju Rayhan</h2>
  //           <h2 [class]="successClass">Raju Rayhan</h2>
  //           <h2 class="text-special" [class]="successClass">Raju Rayhan</h2>

  //           <h2 [class.text-danger]="hasError">Raju Rayhan</h2>

  //           <h2 [ngClass]="messageClasses">Multiple Condition Class Binding</h2>

  //         `,

  // Style Binding
  // template: `
  //       <h2>
  //         Welcome {{ name }}
  //       </h2>
  //       <h2 [style.color]="hasError? 'red' : 'green'">Style Binding</h2>

  //       <h2 [style.color]="highlightColor">Style Binding 2</h2>

  //       <h2 [ngStyle]= "titleStyle">Style Binding 3</h2>

  //     `,

  // Event Binding
  // <button (click)="grretUser($event)">Greet!</button>
  // Template Reference Varible
  // template: `
  //   <h2>
  //     Welcome {{ name }}
  //   </h2>
  //   <input #myInput type="text">
  //   <button (click)="logMessage(myInput)">Log</button>
  // `,

  // Two Way Binding
  // template: `
  //             <input [(ngModel)]="name" type="text">
  //             {{ name }}
  //           `,
  // Structural Directives : If
  // template: `
  //             <div *ngIf="displayHeading; then thenBlock; else elseBlock"></div>

  //             <ng-template #thenBlock>
  //               <h2>Then Block</h2>
  //             </ng-template>

  //             <ng-template #elseBlock>
  //               <h2>Else Block</h2>
  //             </ng-template>
  //             <button (click)="showHeading()">{{ btnText }}</button>
  //           `,
            // Switch
  // template: `
  //           <div [ngSwitch]="color">
  //             <div *ngSwitchCase="'red'">You Picked Red</div>
  //             <div *ngSwitchCase="'blue'">You Picked Blue</div>
  //             <div *ngSwitchCase="'green'">You Picked Green</div>
  //             <div *ngSwitchDefault>Pick Again</div>
  //           </div>

  //         `,
      // For
  // template: `
  //           <h2>{{ parentName }}</h2>
  //           <button (click)="fireEvent()">Send Event</button>
  //       `,

  template: `
  <h2>{{ parentName | uppercase | slice:1:5 }}</h2>
  <h2>{{ persion | json }}</h2>
`,
  // styleUrls: ['./test.component.css']
  styles: []
})
export class TestComponent implements OnInit {
  public name = '';
  public siteUrl = window.location.href;
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public isDisabled = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  };
  public displayHeading = true;
  public btnText = 'Show';

  public titleStyle = {
    color: "blue",
    fontStyle : "italic"
  };
  public highlightColor = 'orange';
  public color = "orange";
  public colors = ["red", "green", "blue", "orange"];

  public persion = {
    'name' : 'Raju Rayhan',
    'office' : 'Simec System',
    'designation' : 'Kamla'
  };

  @Input('parentData') public parentName;

  @Output() public childEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  grretUser(event){
    // return "Hello " + this.name;
    this.name = 'Mobarok';
    console.log(event);
  }

  logMessage(input){
    console.log(input.value);
  }
  showHeading(){
    if(this.displayHeading == false){
      this.displayHeading = true;
      this.btnText = 'Hide';
    }
    else{
      this.btnText = 'Show';
      this.displayHeading = false;
    }
  }

  fireEvent(){
    this.childEvent.emit('Hello From Test Component');
  }

}
