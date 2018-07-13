// import Component functionality from @angular/core
import { Component } from '@angular/core';

@Component({
  // 
  selector: 'app-root',
  // Specifies the main markup file
  templateUrl: './app.component.html',
  // Specifies the styles for the component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Member variable
  title = 'Angular Tour Of Heroes';
}
