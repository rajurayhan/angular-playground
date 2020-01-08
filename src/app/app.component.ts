import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anguler Playground';
  newVar  = 'This is a new Var from Ctrl';
  public name = 'Raju Rayhan from AppComponent Parent';
  public message = '';
}
