import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  cliButton: string = "Ajith";
  clr:boolean = false;
  onClick(i)
  {
    this.cliButton = i;
    this.clr=true;
    // console.log(`Button clicked is ${i}`);
  }
}
