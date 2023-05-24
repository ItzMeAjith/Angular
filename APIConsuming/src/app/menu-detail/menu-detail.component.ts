import { Component } from '@angular/core';
import { Menu } from '../Services/Models/Menu';
import { HotelService } from '../Services/hotel.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent {
  Menu?:Menu
  id!:number;
  hotel:any
constructor(private mn:HotelService){}
  getMenuID()
  {
      return this.mn.getMenuByID(this.id).subscribe(menu => this.Menu = menu);
  }
}
