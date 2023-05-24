import { Component } from '@angular/core';
import { Child1Component } from './child1/child1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj:Child1Component=new Child1Component
  constructor()
  {

  }

}
